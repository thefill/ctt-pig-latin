import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SentenceTranslatorComponent } from './sentence-translator.component';
import { MaterialThemeModule } from '../material-theme';
import { SentenceTranslatorService } from './sentence-translator.service';
import { SettingsService } from '../settings';
import { HistoryService } from '../history';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SentenceTranslatorComponent', () => {
    let component: SentenceTranslatorComponent;
    let fixture: ComponentFixture<SentenceTranslatorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialThemeModule,
                BrowserAnimationsModule
            ],
            providers: [
                SentenceTranslatorService,
                SettingsService,
                HistoryService
            ],
            declarations: [
                SentenceTranslatorComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SentenceTranslatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
