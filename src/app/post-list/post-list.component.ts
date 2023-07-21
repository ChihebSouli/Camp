import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ForumWithUserDTO } from '../models/forumWithUserDto';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  forums: ForumWithUserDTO[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.fetchForums();
  }

  fetchForums() {
    this.postService.getAllForumsWithUserInfo().subscribe(
      (data) => {
        this.forums = data;
      },
      (error) => {
        console.error('Error fetching forums:', error);
      }
    );
  }


}
