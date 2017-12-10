import { ChangeDetectorRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MaterialThemeModule } from '../material-theme';
import { MediaMatcher } from '@angular/cdk/layout';

/**
 * Module for the main app navigation
 */
@NgModule({
    imports: [
        CommonModule,
        MaterialThemeModule
    ],
    declarations: [
        NavigationComponent
    ],
    exports: [
        NavigationComponent
    ],
    providers: [
        MediaMatcher
    ]
})
export class NavigationModule {
}
