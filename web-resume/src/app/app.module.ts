import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationComponent } from './components/application/auction-application.component';
import { ProductService } from './services/product-service';
import ProductItemComponent from './components/product-item/auction-product-item.component';
import StarsComponent from './components/stars/auction-stars.component';
import CarouselComponent from './components/carousel/auction-carousel.component';
import FooterComponent from './components/footer/auction-footer.component';
import NavbarComponent from './components/navbar/auction-navbar.component';
import SearchComponent from './components/search/auction-search.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import HomeComponent from './components/pages/home/auction-home.component';
import ProductDetailComponent from './components/product-detail/product-detail.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    ApplicationComponent,
    HomeComponent,
    ProductDetailComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    SearchComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'product/:productId', component: ProductDetailComponent }
    ])
  ],
  providers: [ProductService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [ApplicationComponent]
})
export class AppModule { }
