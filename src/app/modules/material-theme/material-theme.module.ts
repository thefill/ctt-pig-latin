import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatButtonToggleModule, MatIconModule, MatSidenavModule,
    MatToolbarModule
} from '@angular/material';

/**
 * Barrel module for Material components import
 */
@NgModule({
    imports: [
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    declarations: [],
    exports: [
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
    ]
})
export class MaterialThemeModule {
}
