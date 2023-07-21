import { Component, OnInit } from '@angular/core';
import { ClaimServiceService } from '../services/claim-service.service';
import { NgForm } from '@angular/forms'; // Import NgForm

@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {

  constructor(private reclamationService: ClaimServiceService) { }
  authUser: any; // Declare authUser as a class property

  ngOnInit() {
    // Retrieve the userId from sessionStorage when the component is initialized
    const authUserJson = sessionStorage.getItem('user');
    this.authUser = authUserJson ? JSON.parse(authUserJson) : null;
  }



  onSubmit(reclamationForm: NgForm) {

    if (!this.authUser || !this.authUser.id) {
      console.error('User ID not found in sessionStorage');
      return;
    }

    const RereclamationData = {
      title: reclamationForm.value.subject,
      description: reclamationForm.value.description
    };
    this.reclamationService.createReclamation(this.authUser.id, RereclamationData).subscribe(
      (response) => {
        // Handle the successful response, e.g., show a success message
        console.log('Reclamation created:', response);
        reclamationForm.resetForm(); // Use the resetForm() method to reset the form
      },
      (error) => {
        // Handle the error response, e.g., show an error message
        console.error('Error creating reclamation:', error);
      }
    );
  }


}
