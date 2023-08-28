import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/model/user/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup; 
  @Input() authStatus: boolean | undefined;

  constructor(private formBuilder: FormBuilder, 
              private userService: UserService, 
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.initForm();
    this.authStatus = this.authService.isAuth;
  }

  // pattern : at least 8 characters in length, lowercase letters,uppercase letters, numbers, special characters
  initForm() {
    this.signUpForm = this.formBuilder.group({ 
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    })
  }

  onSubmitForm() {
    // ? -> peut-être la valeur nulle ?
    const email = this.signUpForm.get('email')?.value; 
    const password = this.signUpForm.get('password')?.value;
    /*this.userService.addUser(email, password).then(
      () => {
        this.router.navigate(['/products']);
      }
    ),
    (error) => {
      this.errorMessage = error;
    } 
    */
    
  }

  onSignUp() {
    this.authService.signIn().then(() => {
      this.authStatus = this.authService.isAuth;
      this.router.navigate(['user-profile']);
    });
  };
}
