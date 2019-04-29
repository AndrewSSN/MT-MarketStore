import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

const route: Routes = [
    { path: '', component: StoreComponent },
    { path: 'cart', component: CartDetailComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: '**', redirectTo: '/store' }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class StoreRoutingModule { }
