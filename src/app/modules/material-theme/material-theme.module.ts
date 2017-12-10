import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatButtonToggleModule, MatCardModule, MatGridListModule, MatIconModule, MatInputModule,
    MatSidenavModule,
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
        MatToolbarModule,
        MatGridListModule,
        MatInputModule,
        MatCardModule
    ],
    declarations: [],
    exports: [
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatGridListModule,
        MatInputModule,
        MatCardModule
    ]
})
export class MaterialThemeModule {
}
