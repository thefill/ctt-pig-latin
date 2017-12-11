import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialThemeModule } from '../material-theme';
import { HeaderComponent } from './header.component';

/**
 * Module for the main app header
 */
@NgModule({
    imports: [
        CommonModule,
        MaterialThemeModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {
}
