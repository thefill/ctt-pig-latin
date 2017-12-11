import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MaterialThemeModule } from '../material-theme';
import { MediaMatcher } from '@angular/cdk/layout';
import { RoutingModule } from '../routing';

/**
 * Module for the main app navigation
 */
@NgModule({
    imports: [
        CommonModule,
        MaterialThemeModule,
        RoutingModule
    ],
    providers: [
        MediaMatcher
    ],
    declarations: [
        NavigationComponent
    ],
    exports: [
        NavigationComponent
    ]
})
export class NavigationModule {
}
