import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from '../settings';
import { HistoryComponent } from '../history';
import { SentenceTranslatorComponent } from '../sentence-translator';

// Object with all app routes
export const globalRoutes: Routes = [
    {
        path: '',
        component: SentenceTranslatorComponent,
        data: {
            routeTitle: 'Translator'
        }
    },
    {
        path: 'history',
        component: HistoryComponent,
        data: {
            routeTitle: 'Translation history'
        }
    },
    {
        path: 'settings',
        component: SettingsComponent,
        data: {
            routeTitle: 'Settings'
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(globalRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {
    constructor() {
    }
}
