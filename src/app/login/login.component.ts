import { Component } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  email: string = ''; // Initialize the properties
  password: string = ''; // Initialize the properties
  loginError: boolean = false; // Add the error flag
  errMsg : boolean = false;
  constructor(private authService: AuthService,private router: Router) { }

  login() {
    this.errMsg = false;
    this.loginError =false;
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.status !== 204 ) {
          sessionStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/centres']);
        }
        // Handle successful login response here
        
      },
      (error) => {
        // Handle login error here
        console.error('Login error:', error);
        if(error.status === 400) {
          this.errMsg = true; // Set the error flag to true

        }
        if(error.status === 401) {
          this.loginError = true; // Set the error flag to true

        }


      }
    );
  }

}
