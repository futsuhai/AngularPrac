import { Component, Input } from '@angular/core';
import { Product } from 'src/app/services/product-service';


@Component({
    selector: 'auction-product-item',
    templateUrl: 'auction-product-item.component.html'
})
export default class ProductItemComponent {
    @Input()
    product!: Product;
}