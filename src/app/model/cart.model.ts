import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class Cart {
    private shopItems: Map<string, CartItem> = new Map<string, CartItem>();
    private count: number = 0;
    private amount: number = 0;

    addProduct(product: Product) {
        this.count++;
        this.amount += product.price;
        if (this.shopItems.has(product.name)) {
            this.shopItems.get(product.name).quantity++;
        } else {
            this.shopItems.set(product.name, new CartItem(product, 1));
        }
    }

    updateQuantity(productName: string, newQuantity: number) {
        this.shopItems.get(productName).quantity = newQuantity;
        this.recalculate();
    }

    removeItem(productName: string) {
        this.shopItems.delete(productName);
        this.recalculate();
    }

    recalculate() {
        this.count = 0;
        this.amount = 0;
        this.shopItems.forEach(x => {
            this.count += x.quantity;
            this.amount += x.totalAmount;

        });
    }

    clear() {
        this.shopItems.clear();
        this.recalculate();
    }

    get itemCount(): number {
        return this.count;
    }

    get totalAmount(): number {
        return this.amount;
    }

    get itemList(): CartItem[] {
        let arr: CartItem[] = [];
        this.shopItems.forEach(x => {
            arr.push(x);
        });
        return arr;
    }

}

export class CartItem {
    constructor(public product: Product, public quantity: number = 1) { }

    get totalAmount(): number {
        return this.quantity * this.product.price;
    }
}
