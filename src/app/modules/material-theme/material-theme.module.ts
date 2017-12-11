import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatSlideToggleModule,
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
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatSlideToggleModule
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
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatSlideToggleModule
    ]
})
export class MaterialThemeModule {
}
