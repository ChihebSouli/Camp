import { Component } from '@angular/core';
import { Centre } from '../models/centre';
import { CentreServiceService } from '../services/centre-service.service';

@Component({
  selector: 'app-list-centres',
  templateUrl: './list-centres.component.html',
  styleUrls: ['./list-centres.component.css']
})
export class ListCentresComponent {
  centres: Centre[] = [];

  constructor(private centreService: CentreServiceService) {
    
  }

  ngOnInit() {
    // Retrieve the userId from sessionStorage
    const authUserJson = sessionStorage.getItem('user');
    const authUser = authUserJson ? JSON.parse(authUserJson) : null;

    if (authUser && authUser.id) {
      this.centreService.getCentresByUserId(authUser.id).subscribe(
        (centres) => {
          this.centres = centres;
        },
        (error) => {
          console.error('Error fetching centres:', error);
        }
      );
    }
  }

  onDeleteCentre(id?: number) {
    if (id) {
      this.centreService.deleteCentre(id).subscribe(
        () => {
          // Successfully deleted, remove the reclamation from the list
          this.centres = this.centres.filter((centre) => centre.id !== id);
        },
        (error) => {
          console.error('Error deleting centre:', error);
        }
      );
    }
  }
}

