import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getAllAny(): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/products`);
  }

  getAll(): Observable<ProductAPIResponse> {
    return this.http.get<ProductAPIResponse>(`${environment.apiBaseUrl}/products`);
  }
}

interface APIResponse {
  total: number;
  skip: number;
  limit: number;
}

interface ProductAPIResponse extends APIResponse {
  products: Product[];
}