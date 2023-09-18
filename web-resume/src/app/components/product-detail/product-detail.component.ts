import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Review } from 'src/app/services/product-service';


@Component({
    selector: 'auction-product-page',
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.scss']
})
export default class ProductDetailComponent {
    product: Product | undefined;
    reviews: Review[] = [];

    constructor(route: ActivatedRoute, productService: ProductService) {
        let prodId: number = parseInt(route.snapshot.params['productId']);
        this.product = productService.getProductById(prodId);
        if(!this.product){
            return;
        }
        this.reviews = productService.getReviewsForProduct(this.product.id);
    }
}