import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../models/reclamation';
import { ClaimServiceService } from '../services/claim-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html',
  styleUrls: ['./claims-list.component.css']
})
export class ClaimsListComponent implements OnInit {
  reclamations: Reclamation[] = [];

  constructor(private reclamationService: ClaimServiceService) {
    
   }

    ngOnInit() {
      // Retrieve the userId from sessionStorage
      const authUserJson = sessionStorage.getItem('user');
      const authUser = authUserJson ? JSON.parse(authUserJson) : null;

      if (authUser && authUser.id) {
        // Get reclamations by user ID
        this.reclamationService.getReclamationsByUserId(authUser.id).subscribe(
          (reclamations) => {
            this.reclamations = reclamations;
          },
          (error) => {
            console.error('Error fetching reclamations:', error);
          }
        );
      }
    }

    onDeleteReclamation(id?: number) {
      if (id) {
        this.reclamationService.deleteReclamation(id).subscribe(
          () => {
            // Successfully deleted, remove the reclamation from the list
            this.reclamations = this.reclamations.filter((reclamation) => reclamation.id !== id);
          },
          (error) => {
            console.error('Error deleting reclamation:', error);
          }
        );
      }
    }
  
}
