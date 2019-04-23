import { Product } from '../model/product.model';
import { RestDataSource } from './rest.datasource';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductRepository {
    private categories: string[] = [];
    private products: Product[] = [];

    constructor(private datasource: RestDataSource) {
        datasource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = Array.from(new Set(data.map(x => x.category)));
        });
    }

    getCategories(): string[] {
        return this.categories;
    }

    getProducts(selectedCategory: string = null): Product[] {
        return this.products.filter(x => selectedCategory == null || x.category == selectedCategory);
    }

}