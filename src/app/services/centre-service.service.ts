import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Centre } from '../models/centre';
@Injectable({
  providedIn: 'root'
})
export class CentreServiceService {

  private apiUrl = 'http://localhost:8085/centres'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  createCentre(userId: any, centre: Centre): Observable<Centre> {
    return this.http.post<Centre>(`${this.apiUrl}/${userId}`, centre);
}

getCentresByUserId(userId: number): Observable<Centre[]> {
  const url = `${this.apiUrl}/user/${userId}`;
  return this.http.get<Centre[]>(url);
}

deleteCentre(id: number): Observable<void> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete<void>(url);
}

getCentreById(id: number): Observable<Centre> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.get<Centre>(url);
}

updateCentre(id: number, Centre: Centre): Observable<Centre> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.put<Centre>(url, Centre);
}
}

