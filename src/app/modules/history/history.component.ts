import { Component } from '@angular/core';
import { HistoryService } from './history.service';
import { HistoryEntry } from './history.interface';

@Component({
    selector: 'ctt-history',
    templateUrl: './history.component.html',
    styleUrls: [
        './history.component.scss',
    ]
})
export class HistoryComponent {

    public get history(): HistoryEntry[] {
        return this.historyService.historyStore;
    }

    constructor(
        private historyService: HistoryService
    ) {
    }

    /**
     * Remove entry by timestamp
     */
    public removeHistoryEntry(timestamp: number) {
        this.historyService.removeEntry(timestamp);
    }


}
