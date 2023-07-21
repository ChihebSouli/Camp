import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LivreurService {
  private baseUrl = 'http://localhost:8085/deliveries'; // Replace with your actual API base URL

  constructor(private http: HttpClient) {}

  getAssignedDeliveries(agentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/agent/${agentId}`);
  }

  StateDelivered(assignmentId: number): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/${assignmentId}/delivered`, {});
  }

  StateCanceled(assignmentId: number): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/${assignmentId}/canceled`, {});
  }
}