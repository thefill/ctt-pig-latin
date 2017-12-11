import { Component } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
    selector: 'ctt-settings',
    templateUrl: './settings.component.html',
    styleUrls: [
        './settings.component.scss'
    ]
})
export class SettingsComponent {

    public get respectPunctuation() {
        return this.settingsService.respectPunctuation;
    }

    public set respectPunctuation(value: boolean) {
        this.settingsService.respectPunctuation = value;
    }

    public get preserveCapitalisation() {
        return this.settingsService.preserveCapitalisation;
    }

    public set preserveCapitalisation(value: boolean) {
        this.settingsService.preserveCapitalisation = value;
    }

    public get historyLimit() {
        return this.settingsService.historyLimit;
    }

    public set historyLimit(value: number) {
        this.settingsService.historyLimit = value;
    }

    public get autoTranslateAllowed() {
        return this.settingsService.autoTranslateAllowed;
    }

    public set autoTranslateAllowed(value: boolean) {
        this.settingsService.autoTranslateAllowed = value;
    }

    public get autoTranslateEnabled() {
        return this.settingsService.autoTranslateEnabled;
    }

    public set autoTranslateEnabled(value: boolean) {
        this.settingsService.autoTranslateEnabled = value;
    }

    constructor(
        private settingsService: SettingsService,
    ) {
    }
}
