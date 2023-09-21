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

    newComment: string = '';
    newRating: number = 0;

    isReviewHidden: boolean = true;

    constructor(route: ActivatedRoute, productService: ProductService) {
        let prodId: number = parseInt(route.snapshot.params['productId']);
        this.product = productService.getProductById(prodId);
        if (!this.product) {
            return;
        }
        this.reviews = productService.getReviewsForProduct(this.product.id);
    }

    addReview() {
        if(this.product){
            let review = new Review(
                0,
                this.product.id,
                new Date(),
                'Anonymous',
                this.newRating,
                this.newComment);
                
                console.log("Adding review " + JSON.stringify(review));
                this.reviews = [...this.reviews, review];
                this.product.rating = this.averageRating(this.reviews);
        }
    }

    averageRating(review: Review[]){
        let sum = this.reviews.reduce(
            (average, review) => average + review.rating, 0);
        return sum / this.reviews.length;
    }

    resetForm(){
        this.newRating = 0;
        this.newComment = '';
        this.isReviewHidden = true;
    }
   
}