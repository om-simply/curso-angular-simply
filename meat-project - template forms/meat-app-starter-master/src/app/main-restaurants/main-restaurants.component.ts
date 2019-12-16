import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './main-restaurants.service';

@Component({
  selector: 'app-main-restaurants',
  templateUrl: './main-restaurants.component.html'
})
export class MainRestaurantsComponent implements OnInit {

  restaurants : Restaurant[]

  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit() {
   this.restaurantService.restaurants()
   .subscribe( restaurants => this.restaurants = restaurants);
  }

}
