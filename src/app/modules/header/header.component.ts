import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * Main app header component
 */
@Component({
    selector: 'ctt-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.scss'
    ]
})
export class HeaderComponent {
    // title & icon
    @Input() public toolbarTitle = 'Toolbar title';
    @Input() public toolbarTitleIcon = 'help_outline';

    // button label & icon: toggled state
    @Input() public buttonIconToggle? = 'close';
    @Input() public buttonLabelToggle? = 'Menu';

    // button label & icon: default state
    @Input() public buttonIcon? = 'menu';
    @Input() public buttonLabel? = 'Menu';

    // toggle state
    @Input() public buttonToggle = false;
    @Output() public buttonToggleChange: EventEmitter<boolean> = new EventEmitter();

    constructor() {
    }

    /**
     * Toggle & emit change
     */
    public toggle() {
        this.buttonToggle = !this.buttonToggle;
        this.buttonToggleChange.emit(this.buttonToggle);
    }

}
