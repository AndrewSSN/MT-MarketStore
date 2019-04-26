import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    Cart, Order, AuthService
  ]
})
export class ModelModule { }
