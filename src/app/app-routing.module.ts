import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: 'store', component: StoreComponent },
  { path: 'store', loadChildren: './component/store/store.module#StoreModule' },
  { path: 'admin', loadChildren: './component/admin/admin.module#AdminModule' },
  { path: '**', redirectTo: '/store' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
