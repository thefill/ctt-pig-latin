import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
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
export class NavigationComponent implements OnDestroy, OnInit {
    // Should we show sidenav
    @Input() public show = false;
    @Output() public showChange: EventEmitter<boolean> = new EventEmitter();

    // Handle media queries
    public mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;

    // reference to sidenav links container
    @ViewChild('sidenavList') private sidenavList: ElementRef;

    constructor(
        changeDetector: ChangeDetectorRef,
        media: MediaMatcher
    ) {
        // Handle mediaQueries change
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetector.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit() {
        // subscribe to the click event to hide sidebar on navigation event
        this.sidenavList.nativeElement
            .addEventListener('click', () => {
                this.hide();
            });
    }

    /**
     * Callback on component destroy event
     */
    ngOnDestroy(): void {
        // clean listeners
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    /**
     * Callback on sidenav internal hide event e.g. when backdrop clicked
     */
    public onHide() {
        this.showChange.emit(false);
    }

    /**
     * Close sidenav
     */
    public hide() {
        this.show = false;
        this.onHide();
    }
}
