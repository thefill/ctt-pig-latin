import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { MaterialThemeModule } from '../material-theme';
import { SettingsService } from './settings.service';

/**
 * Module for settings part of app
 */
@NgModule({
    imports: [
        CommonModule,
        MaterialThemeModule
    ],
    providers: [
        SettingsService
    ],
    declarations: [
        SettingsComponent
    ],
    exports: [
        SettingsComponent
    ]
})
export class SettingsModule {
    constructor() {
    }
}
