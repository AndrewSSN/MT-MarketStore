import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class Cart {
    private shopItems: Map<string, CartItem> = new Map<string, CartItem>();
    private itemCount: number = 0;
    private amount: number = 0;

    addProduct(product: Product) {
        this.itemCount++;
        this.amount += product.price;
        if (this.shopItems.has(product.name)) {
            this.shopItems.get(product.name).quantity++;
        } else {
            this.shopItems.set(product.name, new CartItem(product, 1));
        }
    }

    get itemInCart(): number {
        return this.itemCount;
    }

    get totalAmount(): number {
        return this.amount;
    }

}

export class CartItem {
    constructor(public product: Product, public quantity: number = 1) { }

    get ItemsAmount(): number {
        return this.quantity * this.product.price;
    }
}
