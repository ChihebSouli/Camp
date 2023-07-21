import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActiviteService } from '../services/activite.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrls: ['./add-activite.component.css']
})
export class AddActiviteComponent {
  centreId?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activiteService: ActiviteService
  ) {}

  ngOnInit(): void {
    // Retrieve the centreId from the route query parameters
this.route.params.subscribe((params) => {
  const id = this.route.snapshot.params['id']; // Use index signature to access 'id'
  this.centreId = id;
  console.log(id)
  });
}
  onSubmit(activityForm: NgForm) {
    if (!this.centreId) {
      console.error('Centre ID not found in query parametersxxx.');
      return;
    }

    const activityData = {
      nomAct: activityForm.value.nomAct,
      description: activityForm.value.description,
      duree: activityForm.value.duree,
      capaciteMax: activityForm.value.capaciteMax,
      centreId: this.centreId,
    };

    this.activiteService.createActivity(this.centreId,activityData).subscribe(
      (response) => {
        console.log('Activity created:', response);
        // Redirect to the details page of the newly created activity
        this.router.navigate(['/centre-activites', this.centreId  ]);
      },
      (error) => {
        console.error('Error creating Activity:', error);
      }
    );
  }

}