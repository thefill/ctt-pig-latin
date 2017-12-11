import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SentenceTranslatorComponent } from './sentence-translator.component';
import { MaterialThemeModule } from '../material-theme';
import { SentenceTranslatorService } from './sentence-translator.service';
import { HistoryService } from '../history';
import { SettingsService } from '../settings';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/**
 * Module for sentence-translator part of app
 */
@NgModule({
    imports: [
        CommonModule,
        MaterialThemeModule
    ],
    providers: [
      SentenceTranslatorService,
      SettingsService,
      HistoryService
    ],
    declarations: [
        SentenceTranslatorComponent
    ],
    exports: [
        SentenceTranslatorComponent
    ]
})
export class SentenceTranslatorModule {
    constructor() {
    }
}
