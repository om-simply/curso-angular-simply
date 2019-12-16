import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { MainRestaurantsComponent } from './main-restaurants/main-restaurants.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component'
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'
import { OrderComponent } from './order/order.component'
import { OrderSummaryComponent } from './order-summary/order-summary.component'
import { RatingComponent } from './shared/rating/rating.component'

export const ROUTES: Routes = [
{path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'order', component: OrderComponent},
{path: 'restaurants', component: MainRestaurantsComponent},
{path: 'order-summary', component: OrderSummaryComponent},
{path: 'restaurants/:id', component: RestaurantDetailComponent,
children: [
    {path: '', redirectTo: 'menu', pathMatch: 'full'},
    {path: 'menu', component: MenuComponent},
    {path: 'reviews', component: ReviewsComponent}
]
}


]