import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {

  constructor(private authService: AuthService) { }
  successMessage: string = '';
  failedMessage: string = '';
  registred:boolean = false;
  successMessage2: string = '';
  failedMessage2: string = '';

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
