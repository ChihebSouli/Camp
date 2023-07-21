import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forum } from '../models/forum';
import { ForumWithUserDTO } from '../models/forumWithUserDto';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:8085/forum'; // Replace with your backend API URL


  constructor(private http: HttpClient) { }

  createForum(userId: any,forum: Forum): Observable<Forum> {
    return this.http.post<Forum>(`${this.apiUrl}/add/${userId}`, forum);
  }

  getAllForumsWithUserInfo(): Observable<ForumWithUserDTO[]> {
    return this.http.get<ForumWithUserDTO[]>(`${this.apiUrl}/getForums`);
  }

  getForumInfoById(id: number): Observable<ForumWithUserDTO> {
    const url = `${this.apiUrl}/getForumWithUserById/${id}`;
    return this.http.get<ForumWithUserDTO>(url);
  }

  deleteForum(id: number): Observable<void> {
    const url = `${this.apiUrl}/deleteForum/${id}`;
    return this.http.delete<void>(url);
  }

  updateForum(id: number, forum: Forum): Observable<Forum> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Forum>(url, forum);
  }
  
  


 
}
