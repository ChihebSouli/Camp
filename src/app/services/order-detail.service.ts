import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailService {
  private baseUrll = 'http://localhost:8085/orders'; // Replace with your actual API base URL

  constructor(private http: HttpClient) {}

  getOrderById(orderId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrll}/${orderId}`);
  }
}
