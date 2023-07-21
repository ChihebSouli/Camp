import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { ForumWithUserDTO } from '../models/forumWithUserDto';
import { CommentService } from '../services/comment.service';
import { NgForm } from '@angular/forms'; // Import NgForm
import { AppComment } from '../models/comment';
import { CommentWithUserDto } from '../models/commentWithUserDto';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{
  comments: CommentWithUserDto[] = [];

  authUser: any; // Declare authUser as a class property
  postId!: number;
  forum : ForumWithUserDTO = {
    question: '',
    content: '',
    title: '',
    creationDate: '',// Consider changing to a Date type if needed
    user: {
      username: '',
      email: ''

    }
  }

  badWord : boolean = false;

  comment: AppComment = {
    content: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private commentService : CommentService
  ) {} 
  
  ngOnInit(): void {
    // Get the reclamation id from the route parameters
    const id = this.route.snapshot.params['id']; // Use index signature to access 'id'
    this.postId = id;
    // Retrieve the reclamation data based on the id
    this.postService.getForumInfoById(id).subscribe(
      (forum) => {
        // Assign the retrieved data to the 'reclamation' property
        this.forum = forum;
      },
      (error) => {
        console.error('Error fetching reclamation:', error);
      }
    );

    const authUserJson = sessionStorage.getItem('user');
    this.authUser = authUserJson ? JSON.parse(authUserJson) : null;

    if (this.authUser && this.authUser.id) {
      // Get comments by form ID
      this.commentService.getComByFormId(this.postId).subscribe(
        (comments) => {
          this.comments = comments;
        },
        (error) => {
          console.error('Error fetching reclamations:', error);
        }
      );
    }

  }

  onDeleteComment(id?: number) {
    if (id) {
      this.commentService.deleteCom(id).subscribe(
        () => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/postdetails', this.postId]);
          });
          },
        (error) => {
          console.error('Error deleting reclamation:', error);
        }
      );
    }
  }

  onDeleteForm(id?: number) {
    if (id) {
      this.postService.deleteForum(id).subscribe(
        () => {
          this.router.navigate(['/postlist']);
        },
        (error) => {
          console.error('Error deleting reclamation:', error);
        }
      );
    }
  }
  onSubmit(commentForm: NgForm) {
    this.badWord = false; // Set the error flag to true

    if (!this.authUser || !this.authUser.id) {
      console.error('User ID not found in sessionStorage');
      return;
    }

    const commentData = {
      content: commentForm.value.content,
    };
  
    this.commentService.createComment(commentData, this.postId, this.authUser.id).subscribe(
      response => {
        // Gérer la réponse du serveur si nécessaire
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/postdetails', this.postId]);
        });
    
        commentForm.resetForm();
      },
      error => {
        this.badWord = true; // Set the error flag to true
        console.error('Error creating post:', error);
      }
    );
  }

  


}
