import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'auction-stars',
    templateUrl: 'auction-stars.component.html',
    styleUrls: ['auction-stars.component.scss']
})
export default class StarsComponent {

    private _rating: number = 0;
    stars: boolean[] = [];
    private maxStars: number = 5;
    @Input() readonly: boolean = true;
    @Input() get rating(): number {
        return this._rating;
    }

    set rating(value: number | undefined) {
        this._rating = value || 0;
        this.stars = Array(this.maxStars).fill(true, 0, this.rating)
    }

    @Output() ratingChange: EventEmitter<number> = new EventEmitter();

    fillStarsWithColor(index: number) {
        if (!this.readonly) {
            this.rating = index + 1;
            this.ratingChange.emit(this.rating);
        }
    }
}