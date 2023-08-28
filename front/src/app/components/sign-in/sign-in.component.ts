import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
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
    this.signInForm = this.formBuilder.group({ 
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    })
  }

  onSubmitForm() {
    // ? -> peut-être la valeur nulle ?
    const email = this.signInForm.get('email')?.value; 
    const password = this.signInForm.get('password')?.value;
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

  onSignIn() {
    this.authService.signIn().then(() => {
      this.authStatus = this.authService.isAuth;
      this.router.navigate(['user-profile']);
    });
  };
}
