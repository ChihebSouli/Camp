import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service'; // Replace '../auth.service' with the correct path to your auth service
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('registrationForm', { static: true }) registrationForm: any; // Add the ViewChild decorator

  email: string = '';
  username: string = '';
  password: string = '';
  nom: string = '';
  prenom: string = '';
  gov: string = '';
  selectedRole: string = '';
  successMessage: string = '';
  failedMessage: string = '';
  selectedRoles: any = {}; // Object to hold the selected roles
  registred:boolean = false;
  successMessage2: string = '';
  failedMessage2: string = '';

  constructor(private authService: AuthService,private router: Router) { }
  signUp() {
    const roles: string[] = Object.keys(this.selectedRoles).filter(key => this.selectedRoles[key]);

    this.failedMessage="";
    this.successMessage="";
    const userData = {
      email: this.email,
      username: this.username,
      password: this.password,
      nom: this.nom,
      prenom: this.prenom,
      gov: this.gov,
      role: roles // Modify this to include the selected role based on user input
    };


    this.authService.registerUser(userData).subscribe(
      (response) => {
        
        this.successMessage = 'Registration successful!';
        this.registred = true
        this.router.navigate(['/verify']);

        // Clear the selectedRoles object
        Object.keys(this.selectedRoles).forEach(key => this.selectedRoles[key] = false);
 // Set the success message
        // Optionally, you can redirect the user to the login page after successful sign-up
        // this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error)
        this.failedMessage = error.error.message;
        // Handle the sign-up error and display an error message to the user if needed
      }
    );
  }


  onSubmit(verifyForm: NgForm) {


    const verifReq = {
      token: verifyForm.value.token,
    };
  
    this.authService.verifyAccount(verifReq.token).subscribe(
      response => {
        this.failedMessage2 = '';

        this.successMessage2 = 'Verification successful!';
        verifyForm.reset();
      },
      error => {
        this.failedMessage2 = 'Verification failed!';

      }
    );
  }

}

