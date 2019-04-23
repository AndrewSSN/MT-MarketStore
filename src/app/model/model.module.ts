import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Cart } from './cart.model';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    Cart
  ]
})
export class ModelModule { }
