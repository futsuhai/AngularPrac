import { Component } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product-service';

@Component({
    selector: 'auction-home-page',
    templateUrl: 'auction-home.component.html',
    styleUrls: ['auction-home.component.scss']
})

export default class HomeComponent {
    products: Product[] = [];
    constructor(private productService: ProductService) {
        this.products = this.productService.getProduct();
    }
}