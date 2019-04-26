import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/model/cart.model';

@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  constructor(private cart: Cart) { }

  ngOnInit() {
  }

  get cartItemList(): CartItem[] {
    return this.cart.itemList;
  }

  updateQuantity(productName: string, newQuantity: number) {
    this.cart.updateQuantity(productName, Number(newQuantity));
  }

  removeItem(productName: string) {
    this.cart.removeItem(productName);
  }

}
