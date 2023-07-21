import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from '../models/activite';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-activite-centre',
  templateUrl: './activite-centre.component.html',
  styleUrls: ['./activite-centre.component.css']
})
export class ActiviteCentreComponent {
  centreId!: number;
  activities: Activite[] = [];

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private activiteService: ActiviteService
  ) {}

  ngOnInit(): void {
this.route.params.subscribe((params) => {
const id = this.route.snapshot.params['id']; // Use index signature to access 'id'
this.centreId = id;
console.log(id)
 this.loadActivities();
});
}

  loadActivities(): void {
    this.activiteService
      .getAllActivitesByCentre(this.centreId)
      .subscribe((activities) => {
        this.activities = activities;
      });
  }

  onDeleteActivity(id?: number) {
    if (id) {
      this.activiteService.deleteActivity(id).subscribe(
        () => {
          // Successfully deleted, remove the reclamation from the list
          this.activities = this.activities.filter((act) => act.id !== id);
        },
        (error) => {
          console.error('Error deleting centre:', error);
        }
      );
    }
  }


goToAddClaimWithCentreId(): void {
  if (this.centreId) {
    this.router.navigate(['/addactivity', this.centreId]);
  } else {
    console.error('Centre ID not found.');
  }
}

}

