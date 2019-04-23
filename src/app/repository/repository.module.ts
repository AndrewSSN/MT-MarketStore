import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductRepository } from './product.repository';
import { RestDataSource } from './rest.datasource';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    ProductRepository, RestDataSource
  ]
})
export class RepositoryModule { }
