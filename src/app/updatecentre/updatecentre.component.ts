import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Centre } from '../models/centre';
import { CentreServiceService } from '../services/centre-service.service';
@Component({
  selector: 'app-updatecentre',
  templateUrl: './updatecentre.component.html',
  styleUrls: ['./updatecentre.component.css']
})
export class UpdatecentreComponent {
  centreId!: number;
  centreToUpdate!: Centre;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private centreService: CentreServiceService
  ) {}  

  centre: Centre = {
    nom: '',
    description: '',
    adresse: '',
    capaciteAcc:0
  };

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; 

    this.centreService.getCentreById(id).subscribe(
      (centre) => {
        // Assign the retrieved data to the 'reclamation' property
        this.centre = centre;
      },
      (error) => {
        console.error('Error fetching centre:', error);
      }
    );
  }

  onSubmit(centreForm: NgForm) {
  
      this.centre.nom = centreForm.value.nom;
      this.centre.description = centreForm.value.description;
      this.centre.adresse = centreForm.value.adresse;
      this.centre.capaciteAcc = centreForm.value.capaciteAcc;

      if (this.centre.id) {
        this.centreService.updateCentre(this.centre.id, this.centre).subscribe(
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

