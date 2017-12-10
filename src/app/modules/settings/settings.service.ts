import { Injectable } from '@angular/core';
import { TranslationRule } from './settings.interface';

/**
 * Cross-component settings store
 */
@Injectable()
export class SettingsService {
    // preserve punctuations
    public preservePunctuation = true;
    // preserve capitalisation
    public preserveCapitalisation = true;

    // translation rules - position is important (rules don't stack)
    private _translationRules: TranslationRule[] = [];
    public set translationRules(rules: TranslationRule[]) {
        // compile rules
        this._translationRules = this.compileRules(rules);
    }

    public get translationRules(): TranslationRule[] {
        return this._translationRules;
    }

    // auto-translate as user type
    public autoTranslate = false;
    // limit for history entries
    public historyLimit = 10;

    constructor() {
        // set initial rules
        this.translationRules = [
            // Default rule for consonants
            {
                ruleName: 'Consonants to "ay"',
                predicatePartials: [
                    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
                    'p', 'q', 'r', 's', 't', 'v', 'x', 'z', 'w', 'y'
                ],
                predicate: null,
                clustering: false,
                needleToTheEnd: true,
                suffix: 'ay',
            },
            // Default rule for vowel
            {
                ruleName: 'Vowels to "way"',
                predicatePartials: [
                    'a', 'e', 'i', 'o', 'u'
                ],
                predicate: null,
                clustering: false,
                needleToTheEnd: false,
                suffix: 'way',
            }
        ];
    }

    /**
     * Generate final predicate for provided rules
     */
    compileRules(rules: TranslationRule[]): TranslationRule[] {
        // generate / regenerate final predicate for provided rules
        return rules.map(rule => {
            // TODO: implement
            return rule;
        });
    }

}
