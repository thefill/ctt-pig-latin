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
    constructor(
        private settingsService: SettingsService,
    ) {
    }
}
