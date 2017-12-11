import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialThemeModule } from '../material-theme';
import { HistoryComponent } from './history.component';
import { HistoryService } from './history.service';
import { SettingsService } from '../settings';

describe('HistoryComponent', () => {
    let component: HistoryComponent;
    let fixture: ComponentFixture<HistoryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialThemeModule
            ],
            providers: [
                HistoryService,
                SettingsService
            ],
            declarations: [
                HistoryComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HistoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
