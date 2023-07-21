import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm
import { CentreServiceService } from '../services/centre-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addcentre',
  templateUrl: './addcentre.component.html',
  styleUrls: ['./addcentre.component.css']
})
export class AddcentreComponent {
  constructor(private centreService: CentreServiceService, private route: ActivatedRoute,
    private router: Router) { }
  authUser: any;

  ngOnInit() {
    const authUserJson = sessionStorage.getItem('user');
    this.authUser = authUserJson ? JSON.parse(authUserJson) : null;
  }

  onSubmit(centreForm: NgForm) {

    if (!this.authUser || !this.authUser.id) {
      console.error('User ID not found in sessionStorage');
      return;
    }

    const CentreData = {
      nom: centreForm.value.nom,
      adresse: centreForm.value.adresse,
      description: centreForm.value.description,
      capaciteAcc: centreForm.value.capaciteAcc

    };
    this.centreService.createCentre(this.authUser.id, CentreData).subscribe(
      (response) => {
        console.log('Centre created:', response);
        this.router.navigate(['/centres']);
      },
      (error) => {
        console.error('Error creating Centre:', error);
      }
    );
  }
}

