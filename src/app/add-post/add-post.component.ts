import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; // Import NgForm
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{

  
  authUser: any; // Declare authUser as a class property

  ngOnInit() {
    // Retrieve the userId from sessionStorage when the component is initialized
    const authUserJson = sessionStorage.getItem('user');
    this.authUser = authUserJson ? JSON.parse(authUserJson) : null;
  }

  constructor(private postService: PostService,private router: Router) { }

  onSubmit(postForm: NgForm) {

    if (!this.authUser || !this.authUser.id) {
      console.error('User ID not found in sessionStorage');
      return;
    }

    const postData = {
      title: postForm.value.subject,
      content: postForm.value.content,
      question: postForm.value.question
    };
  
    this.postService.createForum(this.authUser.id,postData).subscribe(
      response => {
        // Gérer la réponse du serveur si nécessaire
        console.log('Post created:', response);
        this.router.navigate(['/postlist']);

        postForm.resetForm();
      },
      error => {
        // Gérer les erreurs s'il y en a
        console.error('Error creating post:', error);
      }
    );
  }
  
}
