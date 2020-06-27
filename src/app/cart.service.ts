import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class CartService {
 items = [];
 constructor() { }
 
 calculatePrice(){
  let calcPrice: number = 0;
  for(let item of this.items){
    calcPrice += item.price;
  }
  return calcPrice.toFixed(2);
}

 addToCart(product) {
   this.items.push(product);
 }

 getItems() {
   return this.items;
 }

 clearCart() {
   this.items = [];
   return this.items;
 }
}