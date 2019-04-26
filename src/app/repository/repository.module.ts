import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductRepository } from './product.repository';
import { RestDataSource } from './rest.datasource';
import { OrderRepository } from './order.repository';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    ProductRepository, RestDataSource, OrderRepository
  ]
})
export class RepositoryModule { }
