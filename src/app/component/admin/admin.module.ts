import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AdminAuthComponent,
        AdminComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule
    ]
})

export class AdminModule { }
