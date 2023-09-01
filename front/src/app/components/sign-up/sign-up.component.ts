import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  authStatus: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.authStatus$.subscribe((status) => {
      this.authStatus = status;
    });
    this.signUpForm = this.formBuilder.group({
      firstName: this.formBuilder.control(""),
      lastName: this.formBuilder.control(""),
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
        ],
      ],
    });
  }

  onSignUp() {
    this.authService.setAuthStatus(true);
    this.router.navigate(["user-profile"]);
  }
}
