import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Cart } from './cart.model';
import { Order } from './order.model';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    Cart, Order
  ]
})
export class ModelModule { }
