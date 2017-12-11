import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialThemeModule } from '../material-theme';
import { SettingsComponent } from './settings.component';
import { SettingsService } from './settings.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SettingsComponent', () => {
    let component: SettingsComponent;
    let fixture: ComponentFixture<SettingsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialThemeModule,
                BrowserAnimationsModule
            ],
            providers: [
                SettingsService
            ],
            declarations: [
                SettingsComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
