import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';
import { MaterialThemeModule } from '../material-theme';
import { RouterModule } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavigationComponent', () => {
    let component: NavigationComponent;
    let fixture: ComponentFixture<NavigationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialThemeModule,
                RouterModule,
                BrowserAnimationsModule,
                RouterTestingModule
            ],
            providers: [
                MediaMatcher
            ],
            declarations: [
                NavigationComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
