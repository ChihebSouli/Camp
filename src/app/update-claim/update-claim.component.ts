import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from '../models/reclamation';
import { ClaimServiceService } from '../services/claim-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-claim',
  templateUrl: './update-claim.component.html',
  styleUrls: ['./update-claim.component.css']
})
export class UpdateClaimComponent implements OnInit{
  reclamationId!: number;
  reclamationToUpdate!: Reclamation;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reclamationService: ClaimServiceService
  ) {}  

  reclamation: Reclamation = {
    title: '',
    description: '',
    status: '', // If needed, provide a default value for status
    dateRec: '' // If needed, provide a default value for dateRec
  };


  ngOnInit(): void {
    // Get the reclamation id from the route parameters
    const id = this.route.snapshot.params['id']; // Use index signature to access 'id'

    // Retrieve the reclamation data based on the id
    this.reclamationService.getReclamationById(id).subscribe(
      (reclamation) => {
        // Assign the retrieved data to the 'reclamation' property
        this.reclamation = reclamation;
      },
      (error) => {
        console.error('Error fetching reclamation:', error);
      }
    );
  }

  onSubmit(reclamationForm: NgForm) {
    // Check if the form is valid
      // Update the reclamation object with the values from the form
      this.reclamation.title = reclamationForm.value.subject;
      this.reclamation.description = reclamationForm.value.description;

      if (this.reclamation.id) {
        this.reclamationService.updateReclamation(this.reclamation.id, this.reclamation).subscribe(
          (response) => {
            // Handle the successful response, e.g., show a success message
            console.log('Reclamation updated:', response);
            this.router.navigate(['/myclaims']);

          },
          (error) => {
            // Handle the error response, e.g., show an error message
            console.error('Error updating reclamation:', error);
          }
        );
      }
    

  }


}
