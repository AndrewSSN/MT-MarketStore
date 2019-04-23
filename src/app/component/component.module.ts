import { NgModule } from '@angular/core';
import { StoreComponent } from './store/store.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule

  ],
  exports: [
    StoreComponent
  ]
})
export class ComponentModule { }
