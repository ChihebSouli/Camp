import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8085/api/auth'; // Replace this with your Spring Boot backend URL

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const loginRequest = { username: email, password: password };
    return this.http.post<any>(`${this.apiUrl}/login`, loginRequest);
  }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createuser`, userData);
  }

  verifyAccount(token: string): Observable<any> {
    const loginRequest = { token: token };
    return this.http.post(`${this.apiUrl}/verify`, loginRequest);
  }

}
