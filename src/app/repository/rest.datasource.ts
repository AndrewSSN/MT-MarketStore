import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';

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

}
