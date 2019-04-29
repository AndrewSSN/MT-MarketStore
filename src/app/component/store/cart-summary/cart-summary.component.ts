import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})

export class CartSummaryComponent {
  constructor(public cart: Cart, private router: Router) { }

  shouldDisplay(): boolean {
    return this.router.url === '/store';
  }
}
