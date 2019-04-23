import { NgModule } from '@angular/core';
import { StoreComponent } from './store/store.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { Cart } from '../model/cart.model';

@NgModule({
  declarations: [
    StoreComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    StoreComponent,
    CartSummaryComponent
  ]
})
export class ComponentModule { }
