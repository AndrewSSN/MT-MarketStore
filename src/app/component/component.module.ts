import { NgModule } from '@angular/core';
import { StoreComponent } from './store/store.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { Cart } from '../model/cart.model';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';

@NgModule({
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    AdminComponent,
    AdminAuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    AdminComponent,
    AdminAuthComponent
  ]
})
export class ComponentModule { }
