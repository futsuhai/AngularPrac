import { Component, Input } from '@angular/core';
import { Product } from 'src/app/services/product-service';


@Component({
    selector: 'auction-product-item',
    templateUrl: 'auction-product-item.component.html',
    styleUrls: ['auction-product-item.component.scss']
})
export default class ProductItemComponent {
    @Input()
    product!: Product;
}