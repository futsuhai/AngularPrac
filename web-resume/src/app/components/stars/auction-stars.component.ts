import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'auction-stars',
    templateUrl: 'auction-stars.component.html',
    styleUrls: ['auction-stars.component.scss']
})
export default class StarsComponent implements OnInit {

    @Input() count: number = 5;
    @Input() rating: number | undefined = 0;
    stars: boolean[] = [];

    ngOnInit(): void {
        const normalizedRating = typeof this.rating !== 'undefined' ? this.rating : 0;
        for(let i = 1; i <= this.count; i++){
            this.stars.push(i > normalizedRating);
        }
    }
}