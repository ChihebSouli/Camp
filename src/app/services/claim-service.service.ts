import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation } from '../models/reclamation';
import { ReclamationWithUserDto } from '../models/reclamationWithUserDto';

@Injectable({
  providedIn: 'root'
})
export class ClaimServiceService {
  private apiUrl = 'http://localhost:8085/reclamation'; // Replace with your backend API URL


  constructor(private http: HttpClient) { }

  createReclamation(userId: any, reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(`${this.apiUrl}/${userId}`, reclamation);
}

getReclamationsByUserId(userId: number): Observable<Reclamation[]> {
  const url = `${this.apiUrl}/user/${userId}`;
  return this.http.get<Reclamation[]>(url);
}

deleteReclamation(id: number): Observable<void> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete<void>(url);
}

getReclamationById(id: number): Observable<Reclamation> {
  const url = `${this.apiUrl}/getById/${id}`;
  return this.http.get<Reclamation>(url);
}

getReclamationInfoById(id: number): Observable<ReclamationWithUserDto> {
  const url = `${this.apiUrl}/getInfoById/${id}`;
  return this.http.get<ReclamationWithUserDto>(url);
}


updateReclamation(id: number, reclamation: Reclamation): Observable<Reclamation> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.put<Reclamation>(url, reclamation);
}

sendResponse(id: number, reclamation: Reclamation): Observable<Reclamation> {
  const url = `${this.apiUrl}/status/${id}`;
  return this.http.put<Reclamation>(url, reclamation);
}


getAllForumsWithUserInfo(): Observable<ReclamationWithUserDto[]> {
  return this.http.get<ReclamationWithUserDto[]>(`${this.apiUrl}/allInfos`);
}


}
