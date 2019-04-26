import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartDetailComponent } from './component/cart-detail/cart-detail.component';
import { StoreComponent } from './component/store/store.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminAuthComponent } from './component/admin-auth/admin-auth.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartDetailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'adminAuth', component: AdminAuthComponent },
  { path: '**', redirectTo: '/store' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
