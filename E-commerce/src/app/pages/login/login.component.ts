import { routes } from './../../app.routes';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms'
import { AuthService } from '../../core/services/accAuth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isSpin:boolean = false;
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  errorMes:string = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]\w{7,}$/)]),
  })

  submit() {
   
      if (this.loginForm.valid) {
      this.isSpin = true
      this.authService.sendloginrForm(this.loginForm.value).subscribe({
        next:(res)=>{
          this.isSpin = false
          console.log(res)
          if(res.message == 'success'){
            setTimeout(() => {
              this.router.navigate(['/home'])
            }, 1000);
           
            // acc created
          }
        },
        error:(err)=>{
          this.isSpin = false
          console.log(err);
          this.errorMes = err.error.message;
         
        }
      })
    }
  }

 
 
}
