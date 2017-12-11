import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SentenceTranslatorService } from './sentence-translator.service';
import { SettingsService } from '../settings';

@Component({
    selector: 'ctt-sentence-translator',
    templateUrl: './sentence-translator.component.html',
    styleUrls: [
        './sentence-translator.component.scss'
    ]
})
export class SentenceTranslatorComponent implements OnInit, AfterViewInit {

    public translation = '';

    // is auto-translate allowed
    public get autoTranslateAllowed(): boolean {
        return this.settingsService.autoTranslateAllowed;
    }

    // Handle auto-translate
    private _autoTranslate = false;
    public get autoTranslate(): boolean {
        return this._autoTranslate;
    }

    public set autoTranslate(value: boolean) {
        this._autoTranslate = value;
        // notify service
        this.settingsService.autoTranslateEnabled = value;
    }

    @ViewChild('sourceInput') public sourceInput: ElementRef;
    @ViewChild('resultOutput') public resultOutput: ElementRef;

    constructor(
        private translatorService: SentenceTranslatorService,
        private settingsService: SettingsService
    ) {
        // set initial setting
        this._autoTranslate = this.settingsService.autoTranslateEnabled;
    }

    ngOnInit() {
        // link source to service
        this.translatorService.linkToSource(this.sourceInput);

        // subscribe to the translation stream
        this.translatorService.translationStream.subscribe((result: string) => {
            // set new result
            this.translation = result;
        });
    }

    ngAfterViewInit() {
        // set initial setting
        this._autoTranslate = this.settingsService.autoTranslateEnabled;
    }


    /**
     * Translate content
     */
    public translate() {
        this.translatorService.triggerTranslate();
    }

}
