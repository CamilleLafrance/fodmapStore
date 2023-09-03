import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";
import { User } from "src/model/user/user";

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
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.authService.authStatus$.subscribe((status) => {
      this.authStatus = status;
    });
    this.signUpForm = this.formBuilder.group({
      firstName: this.formBuilder.control(""),
      lastName: this.formBuilder.control(""),
      email: ["", [Validators.required, Validators.email]],
      passwordHash: [
        "",
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
        ],
      ],
    });
  }

  addUser(): void {
    let user: User = this.signUpForm.value;
    this.userService.addUser(user).subscribe({
      next: (data) => {
        console.log(data);
        alert("Compte créé avec succès !");
        this.router.navigate(["main-view"]);
      },
      error: (err) => {
        console.error(err); 
      },
    });
  }

  onSignUp() {
    this.addUser();
    this.authService.setAuthStatus(true);
  }
}
