import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HistoryModule } from './modules/history';
import { SettingsModule } from './modules/settings';
import { SentenceTranslatorModule } from './modules/sentence-translator';
import { NavigationModule } from './modules/navigation';
import { HeaderModule } from './modules/header';
import { RoutingModule } from './modules/routing';
import { MaterialThemeModule } from './modules/material-theme';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialThemeModule,
                RoutingModule,
                HeaderModule,
                NavigationModule,
                SentenceTranslatorModule,
                SettingsModule,
                HistoryModule,
                BrowserAnimationsModule
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));
});
