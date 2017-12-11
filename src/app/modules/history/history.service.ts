import { Injectable } from '@angular/core';
import { SettingsService } from '../settings';
import { HistoryEntry } from './history.interface';

@Injectable()
export class HistoryService {
    // array of entries
    private _historyStore: HistoryEntry[] = [];

    public get historyStore(): HistoryEntry[] {
        return this._historyStore;
    }

    constructor(
        private settingsService: SettingsService
    ) {
    }

    /**
     * Add entry to the store
     */
    public addEntry(input: string, output: string) {
        // get timestamp
        const timestamp = Date.now();

        // if over the limit remove first entry first
        if (this._historyStore.length >= this.settingsService.historyLimit) {
            this._historyStore.shift();
        }

        // add to store
        this._historyStore.push({
            timestamp: timestamp,
            input: input,
            output: output
        });
    }

    /**
     * Remove from store by timestamp
     */
    public removeEntry(timestamp: number) {
        // find entry with timestamp and remove
        const index = this._historyStore.findIndex(entry => {
            return entry.timestamp === timestamp;
        });

        // if entry found
        if (index > -1) {
            // remove
            this._historyStore.splice(index, 1);
        }
    }
}
