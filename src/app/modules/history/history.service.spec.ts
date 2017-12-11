import { TestBed, inject } from '@angular/core/testing';
import { HistoryService } from './history.service';
import { SettingsService } from '../settings';

describe('HistoryService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                HistoryService,
                SettingsService
            ]
        });
    });

    it('should be created', inject([HistoryService], (service: HistoryService) => {
        expect(service).toBeTruthy();
    }));
});
