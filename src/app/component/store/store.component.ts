import { Component, OnInit } from '@angular/core';
import { ProductRepository } from 'src/app/repository/product.repository';
import { Product } from 'src/app/model/product.model';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {
  private selectedCategory: string = null;
  private productPerPage = 4;
  private pageSelected = 0;
  private pageCount = 1;

  constructor(private repository: ProductRepository, private cart: Cart) { }

  ngOnInit() {
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(clickedCategory?: string) {
    this.selectedCategory = clickedCategory;
    this.pageSelected = 0;
  }

  get products(): Product[] {
    const pageIdx = (this.pageSelected) * this.productPerPage;
    const productList = this.repository.getProducts(this.selectedCategory);
    this.pageCount = Math.ceil(productList.length / this.productPerPage);
    return productList.slice(pageIdx, pageIdx + this.productPerPage);
  }

  get pageCounter(): number[] {
    return Array.from(Array(this.pageCount)).map((x, i) => i);
  }

  changePage(page: number) {
    this.pageSelected = page;
  }

  changePageSize(pageSize: number) {
    this.productPerPage = Number(pageSize);
    this.changePage(1);
  }

  addToCart(item: Product) {
    this.cart.addProduct(item);
  }

}
