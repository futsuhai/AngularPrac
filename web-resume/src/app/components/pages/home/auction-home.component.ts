import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product, ProductService } from 'src/app/services/product-service';
import { Observable, debounceTime, pipe } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
    selector: 'auction-home-page',
    templateUrl: 'auction-home.component.html',
    styleUrls: ['auction-home.component.scss']
})

export default class HomeComponent {
    products: Product[] = [];
    titleFilter: FormControl = new FormControl();
    filterCriteria: string = '';

    constructor(private productService: ProductService) {
        this.products = this.productService.getProduct();

        this.titleFilter.valueChanges
        .subscribe(
            {
                next: (value: string) => this.filterCriteria = value,
                error: (error: any) => console.error(error),
                complete: () => console.log('Observable completed')
            });
    }
}