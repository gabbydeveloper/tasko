import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  providers: [MessageService]
})
export class LoginPageComponent {

  public invalidForm: boolean = false;

  public myForm: FormGroup = this.fb.group({
    user:     ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  isValidField(field: string): boolean | null {
    return (this.myForm.controls[field].errors
           && this.myForm.controls[field].touched)
           || this.invalidForm;
  }

  onLogin(): void{
    if(this.myForm.invalid) {
      this.invalidForm = true;
      this.myForm.markAsTouched();
      return;
    }

    // this.myForm.reset();

    this.authService.login(this.myForm.value.user, this.myForm.value.password)
      .subscribe(
        user => {
          if(user.token === undefined) {
            this.showToast('Incorrect user or password')
            return;
          }
          this.router.navigate(['/main-panel'])
        }
      );
  }

  public showToast(message: string):void {
    this.messageService.add({
      severity: 'alert',
      summary: 'Error',
      detail: message
    });
  }

}
