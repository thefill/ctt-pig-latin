import { ElementRef, Injectable } from '@angular/core';
import { SettingsService } from '../settings';
import { HistoryService } from '../history';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/filter';

@Injectable()
export class SentenceTranslatorService {

    public translationStream: Observable<string>;

    // source of data
    private source: ElementRef;

    // manual translation triggered
    private isManulaTrigger = false;

    constructor(
        private settingsService: SettingsService,
        private historyService: HistoryService
    ) {
    }

    /**
     * Connect to the source
     */
    public linkToSource(source: ElementRef) {
        // save source
        this.source = source;

        // hook to the source change event
        this.translationStream = Observable
            .fromEvent(source.nativeElement, 'keyup')
            // block illegal events
            .filter((event: Event) => {
                // if auto-translation allowed & enabled
                if (this.settingsService.autoTranslateAllowed && this.settingsService.autoTranslateEnabled) {
                    // pass event
                    return true;
                }

                // if auto-translate disabled & manual trigger
                if (!this.settingsService.autoTranslateEnabled && this.isManulaTrigger) {
                    // disable manual trigger flag
                    this.isManulaTrigger = false;
                    // pass event
                    return true;
                }

                // else block event
                return false;
            })
            // get source value from event
            .map((event: Event) => {
                return (event.target as HTMLTextAreaElement).value;
            })
            // pass only unique
            .distinctUntilChanged()
            // slow down emission if in auto-translation
            .debounce(() => {
                // if auto-translation allowed & enabled
                if (this.settingsService.autoTranslateAllowed && this.settingsService.autoTranslateEnabled) {
                    // debounce event
                    return Observable.timer(600);
                }
                // else pass quickly
                return Observable.timer(0);
            })
            // translate value
            .map((value: string) => {
                // pass translated result
                return this.translate(value);
            });
    }

    /**
     * Manual translation
     */
    public triggerTranslate() {
        // its a manual trigger
        this.isManulaTrigger = true;
        // trigger event from source on every key-press
        this.source.nativeElement.dispatchEvent(new Event('keyup'));
    }

    /**
     * Use translation rules & modify provided string
     */
    private translate(value: string): string {
        // backup whitespaces and punctuation
        let backupElements: any[];
        let backupPattern: RegExp;
        let words: string[];

        // We will need to check if any extra character has been backed up in
        // the start and end
        let backupStartPattern: RegExp;
        let backupEndPattern: RegExp;
        let prefixCollected = false;
        let suffixCollected = false;

        // if we respect punctuation
        if (this.settingsService.respectPunctuation) {
            // backup punctuation same as whitespaces
            backupPattern = /[\s\.\;\,\-\:\'\"\/]+/g;
            backupStartPattern = /^[\s\.\;\,\-\:\'\"\/]+/g;
            backupEndPattern = /[\s\.\;\,\-\:\'\"\/]+$/g;
        } else {
            // backup only whitespaces
            backupPattern = /[\s]+/g;
            backupStartPattern = /^[\s\.\;\,\-\:\'\"\/]+/g;
            backupEndPattern = /[\s\.\;\,\-\:\'\"\/]+$/g;
        }
        backupElements = value.match(backupPattern);

        // lets check if we backed up any characters at the start or end of string
        prefixCollected = backupStartPattern.test(value);
        suffixCollected = backupEndPattern.test(value);

        // remove backed-up elements and get only words
        words = value
            .replace(backupStartPattern, '')
            .replace(backupEndPattern, '')
            .split(backupPattern);

        // for each of the word apply transformation
        words = words.map(word => {
            // Execute first matching rule
            this.settingsService.translationRules.some(rule => {
                let capitalised = false;
                // if we preserve capitalisation
                if (this.settingsService.preserveCapitalisation) {
                    // is capitalised?
                    capitalised = word[0] === word[0].toUpperCase();
                }

                // word to lower-case
                word = word.toLowerCase();

                const match = rule.predicate.exec(word);
                // if match apply translation
                if (match) {
                    // if we move matched partial to the end of the word
                    if (rule.needleToTheEnd) {
                        const matchedPartial = match[0];
                        // remove p
                        word = word.substring(matchedPartial.length) + matchedPartial;
                    }

                    // if suffix provided
                    if (rule.suffix && rule.suffix.length) {
                        // add it at the end
                        word += rule.suffix;
                    }

                    // if capitalised
                    if (capitalised) {
                        word = word[0].toUpperCase() + word.substring(word[0].length);
                    }

                    // stop searching for the rule - we have found correct one
                    return true;
                }

                // check another rule
                return false;
            });

            return word;
        });

        // we have all words translated - now lets rebuild sentence from the backup
        // If we collected anything at the begin and end of string - lets handle that
        let prefix = '';
        if (prefixCollected) {
            prefix = backupElements.shift();
        }
        let suffix = '';
        if (suffixCollected) {
            suffix = backupElements.pop();
        }

        // now there should be less backed elements than words
        let translation = '';

        for (let i = 0; i < words.length; i++) {
            translation += words[i];
            // if not the last word - we still have backed entries
            if (i + 1 < words.length) {
                translation += backupElements[i];
            }
        }

        // add prefix & suffix
        translation = prefix + translation + suffix;

        // add entry to the history
        this.historyService.addEntry(value, translation);

        return translation;
    }

}
