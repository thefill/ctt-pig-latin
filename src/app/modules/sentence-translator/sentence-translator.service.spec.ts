import { TestBed, inject } from '@angular/core/testing';
import { SentenceTranslatorService } from './sentence-translator.service';
import { HistoryService } from '../history';
import { SettingsService } from '../settings';

describe('SentenceTranslatorService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SentenceTranslatorService,
                HistoryService,
                SettingsService
            ]
        });
    });

    it('should be created', inject([SentenceTranslatorService], (service: SentenceTranslatorService) => {
        expect(service).toBeTruthy();
    }));
});
