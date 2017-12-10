import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './modules/header';
import { MaterialThemeModule } from './modules/material-theme';
import { NavigationModule } from './modules/navigation';
import { MediaMatcher } from '@angular/cdk/layout';
import { RoutingModule } from './modules/routing/routing.module';
import { SentenceTranslatorModule } from './modules/sentence-translator';
import { SettingsModule } from './modules/settings';
import { HistoryModule } from './modules/history';
import { AboutModule } from './modules/about';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        // WebAnimation API polyfill
        BrowserAnimationsModule,
        // Material aggregate module for material components
        MaterialThemeModule,
        // Routing module
        RoutingModule,
        // Main header module
        HeaderModule,
        // Main navigation module
        NavigationModule,
        // Translator module
        SentenceTranslatorModule,
        // Settings module
        SettingsModule,
        // History module
        HistoryModule,
        // About module
        AboutModule
    ],
    providers: [
        // utils for procedurally handling mediaQueries
        MediaMatcher
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
