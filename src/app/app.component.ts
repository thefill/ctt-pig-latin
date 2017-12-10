import { Component } from '@angular/core';

@Component({
    selector: 'ctt-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // app title
    public title = 'Pig latin';
    // app icon
    public icon = 'cached';
    // is sidenav visible?
    public sidenavVisible = false;
}
