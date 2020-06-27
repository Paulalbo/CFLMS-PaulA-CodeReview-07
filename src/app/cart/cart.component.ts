import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  fullPrice;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

   calculatePrice(){
    let calcPrice: number = 0;
    for(let item of this.items){
      calcPrice += item.price;
    }
    return calcPrice.toFixed(2);
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.fullPrice = this.cartService.calculatePrice();
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
