import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activite } from '../models/activite';
@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

    private apiUrl = 'http://localhost:8085/activites'; // Replace with your backend API URL

    constructor(private http: HttpClient) { }
  
    getAllActivitesByCentre(centreId: number): Observable<Activite[]> {
    const url = `${this.apiUrl}/centre/${centreId}`;
    return this.http.get<Activite[]>(url);
  }

  deleteActivity(id: number): Observable<void> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete<void>(url);
    }

 createActivity(centreId: any, act: Activite): Observable<Activite> {
 return this.http.post<Activite>(`${this.apiUrl}/add/${centreId}`, act);
      }

      updateActivity(id: number, Centre: Activite): Observable<Activite> {
          const url = `${this.apiUrl}/${id}`;
          return this.http.put<Activite>(url, Centre);
        }

        getActById(id: number): Observable<Activite> {
            const url = `${this.apiUrl}/${id}`;
            return this.http.get<Activite>(url);
          }

  }

