import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {ROUTES} from 'app/app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component';
import { MainRestaurantsComponent } from './main-restaurants/main-restaurants.component';
import { RestaurantComponent } from './main-restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItensComponent } from './order/order-itens/order-itens.component';

import { OrderService } from './order/order.service';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from './main-restaurants/main-restaurants.service';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RatingComponent } from './shared/rating/rating.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      AboutComponent,
      MainRestaurantsComponent,
      RestaurantComponent,
      RestaurantDetailComponent,
      MenuComponent,
      ShoppingCartComponent,
      MenuItemComponent,
      ReviewsComponent,
      OrderComponent,
      InputComponent,
      RadioComponent,
      OrderItensComponent,
      DeliveryCostsComponent,
      OrderSummaryComponent,
      RatingComponent
   ],
   imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot(ROUTES),
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
      RestaurantsService, ShoppingCartService, {provide: LOCALE_ID, useValue: 'pt-BR'}, OrderService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
