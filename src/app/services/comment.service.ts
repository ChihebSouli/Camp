import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComment } from '../models/comment';
import { CommentWithUserDto } from '../models/commentWithUserDto';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'http://localhost:8085/comment'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  createComment(comment: AppComment, idForum: number, idUser: number): Observable<AppComment> {
    return this.http.post<AppComment>(`${this.apiUrl}/create/${idForum}/${idUser}`, comment);
  }

  getComByFormId(formId: number): Observable<CommentWithUserDto[]> {
    const url = `${this.apiUrl}/forum/${formId}`;
    return this.http.get<CommentWithUserDto[]>(url);
  }

  deleteCom(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete<void>(url);
  }

  

}
