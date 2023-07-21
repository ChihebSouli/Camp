import { Component } from '@angular/core';
import { Activite } from '../models/activite';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updateactivity',
  templateUrl: './updateactivity.component.html',
  styleUrls: ['./updateactivity.component.css']
})
export class UpdateactivityComponent {
  actId!: number;
    centreToUpdate!: Activite;
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private activityService: ActiviteService
    ) {}

    activite: Activite = {
        nomAct: '',
        description: '',
        duree: '',
        capaciteMax:0
      };
    
      ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.activityService.getActById(id).subscribe(
      (act) => {
        // Check if capaciteMax is greater than zero, then set it from the API, otherwise keep the default value
        this.activite = {
          ...act,
          capaciteMax: act.capaciteMax > 0 ? act.capaciteMax : this.activite.capaciteMax
        };
      },
      (error) => {
        console.error('Error fetching activity:', error);
      }
    );
  }

      onSubmit(actForm: NgForm) {
  
            this.activite.nomAct = actForm.value.nomAct;
            this.activite.description = actForm.value.description;
            this.activite.duree = actForm.value.duree;
            this.activite.capaciteMax = actForm.value.capaciteMax;
      
            if (this.activite.id) {
              this.activityService.updateActivity(this.activite.id, this.activite).subscribe(
                (response) => {
                  // Handle the successful response, e.g., show a success message
                  console.log('Centre updated:', response);
                  this.router.navigate(['/centres']);

      
                },
                (error) => {
                  // Handle the error response, e.g., show an error message
                  console.error('Error updating centre:', error);
                }
              );
            }
          
      
        }
}

