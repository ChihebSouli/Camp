// delivery.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private apiUrl = 'http://localhost:8085/orders'; 
  private url = 'http://localhost:8085/deliveries'; // Replace with your API URL
  // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/all'); // Assuming your API endpoint to fetch all orders is "/orders"
  }

   assignOrdersToLivreur(): Observable<any[]> {
    return this.http.post<any[]>(this.url + '/assign-orders', {});
  }
}
