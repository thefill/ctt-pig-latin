import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HistoryComponent } from './history.component';
import { MaterialThemeModule } from '../material-theme';
import { HistoryService } from './history.service';
import { SettingsService } from '../settings';

/**
 * Module for history list part of app
 */
@NgModule({
    imports: [
        CommonModule,
        MaterialThemeModule
    ],
    providers: [
        HistoryService,
        SettingsService
    ],
    declarations: [
        HistoryComponent
    ],
    exports: [
        HistoryComponent
    ]
})
export class HistoryModule {
    constructor() {
    }
}
