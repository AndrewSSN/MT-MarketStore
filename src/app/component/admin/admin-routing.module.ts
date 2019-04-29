import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'main', component: AdminComponent },
    { path: 'auth', component: AdminAuthComponent },
    { path: '**', redirectTo: 'auth' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }
