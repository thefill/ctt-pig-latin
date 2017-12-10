import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

/**
 * Main navigation component
 */
@Component({
    selector: 'ctt-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: [
        './navigation.component.scss'
    ]
})
export class NavigationComponent implements OnDestroy {
    // Should we show sidenav
    @Input() public show = false;

    // Handle media queries
    public mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;


    constructor(
        changeDetector: ChangeDetectorRef,
        media: MediaMatcher
    ) {
        // Handle mediaQueries change
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetector.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    /**
     * Callback on component destroy event
     */
    ngOnDestroy(): void {
        // clean listeners
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

}
