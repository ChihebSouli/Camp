import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {
  private baseUrlll = 'http://localhost:8085/orderProducts'; // Replace with your actual API base URL

constructor(private http: HttpClient) {}

getProductsByOrderId(orderId: number): Observable<any> {
  const url = `${this.baseUrlll}/products/${orderId}`;
  return this.http.get<any>(url);
}
}
