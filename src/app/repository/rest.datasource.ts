import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';
import { Order } from '../model/order.model';
import { map } from 'rxjs/operators';

@Injectable()
export class RestDataSource {
    private protocal: string = 'http';
    private port: number = 3600;

    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${this.protocal}://${location.hostname}:${this.port}/`;
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + 'products');
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseUrl + 'orders', order);
    }

    getOrders(): Observable<Order> {
        return this.http.get<Order>(this.baseUrl + 'orders')
    }

    authenticate(username: string, password: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + 'login', {
            name: username, password: password
        }).pipe(map(response => {
            return response.success;
        }));
    }
}
