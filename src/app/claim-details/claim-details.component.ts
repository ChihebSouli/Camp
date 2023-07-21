import { Component } from '@angular/core';
import { ForumWithUserDTO } from '../models/forumWithUserDto';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { ClaimServiceService } from '../services/claim-service.service';
import { ReclamationWithUserDto } from '../models/reclamationWithUserDto';
import { Reclamation } from '../models/reclamation';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css']
})
export class ClaimDetailsComponent {

  reclamationInfo!: ReclamationWithUserDto;
  authUser: any; // Declare authUser as a class property
  postId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reclamationService : ClaimServiceService
  ) {} 

  reclamation: Reclamation = {
    response: '',
    description: '' // If needed, provide a default value for status
  };

  onSubmit(reclamationForm: NgForm) {
    // Check if the form is valid
      // Update the reclamation object with the values from the form
      this.reclamation.response = reclamationForm.value.response;

      if (this.postId) {
        this.reclamationService.sendResponse(this.postId, this.reclamation).subscribe(
          (response) => {
            // Handle the successful response, e.g., show a success message
            console.log('Reclamation updated:', response);
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/claimDetails', this.postId]);
            });
    
          },
          (error) => {
            // Handle the error response, e.g., show an error message
            console.error('Error updating reclamation:', error);
          }
        );
      }
    

  }

  ngOnInit(): void {
    // Get the reclamation id from the route parameters
    const id = this.route.snapshot.params['id']; // Use index signature to access 'id'
    this.postId = id;
    // Retrieve the reclamation data based on the id
    this.reclamationService.getReclamationInfoById(id).subscribe(
      (reclamationInfo) => {
        // Assign the retrieved data to the 'reclamation' property
        this.reclamationInfo = reclamationInfo;

      },
      (error) => {
        console.error('Error fetching reclamation:', error);
      }
    );

    const authUserJson = sessionStorage.getItem('user');
    this.authUser = authUserJson ? JSON.parse(authUserJson) : null;

    }

    onDeleteReclamation(id?: number) {
      if (id) {
        this.reclamationService.deleteReclamation(id).subscribe(
          () => {
            // Successfully deleted, remove the reclamation from the list
            this.router.navigate(['/allClaims']);
          },
          (error) => {
            console.error('Error deleting reclamation:', error);
          }
        );
      }
    }

}
