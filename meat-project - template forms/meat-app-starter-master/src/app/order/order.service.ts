import { Injectable } from "@angular/core";
import { ShoppingCartComponent } from "app/restaurant-detail/shopping-cart/shopping-cart.component";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Order } from "./order.model";
import { Http, Headers, RequestOptions } from "@angular/http";
import { MEAT_API } from "../app.api";

const headers = new Headers()


@Injectable()
export class OrderService{

    

    constructor(private cartService: ShoppingCartService, private http: Http){}

cartItems(): CartItem[]{
    return this.cartService.items
}

clear(){
    this.cartService.clear()
}

itemsValue(): number{
    return this.cartService.total()
}

increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
}

decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
}

removeItem(item: CartItem){
    this.cartService.removeItem(item)
}

checkOrder(order: Order): Observable<string>{
    headers.append('Content-type','application/json')
    
    return this.http.post(
        `${MEAT_API}/orders`, 
        JSON.stringify(order),
        new RequestOptions({headers: headers}))
    .map(response => response.json())
    .map(order => order.id)
  }

}