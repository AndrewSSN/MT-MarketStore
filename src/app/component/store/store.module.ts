import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreComponent } from './store/store.component';
import { StoreRoutingModule } from './store-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreRoutingModule
  ]
  , exports: [
    CartSummaryComponent
  ]
})
export class StoreModule { }
