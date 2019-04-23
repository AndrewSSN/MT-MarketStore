import { Component, OnInit } from '@angular/core';
import { ProductRepository } from 'src/app/repository/product.repository';
import { Product } from 'src/app/model/product.model';

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

  constructor(private repository: ProductRepository) { }

  ngOnInit() {
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(clickedCategory?: string) {
    this.selectedCategory = clickedCategory;
  }

  get products(): Product[] {
    let pageIdx = (this.pageSelected) * this.productPerPage;
    let productList = this.repository.getProducts(this.selectedCategory);
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

}
