import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"],
})
export class AboutUsComponent {
  public contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: this.formBuilder.control(""),
      email: ["", [Validators.required, Validators.email]],
      message: this.formBuilder.control(""),
    });
  }

  sendMessage(): void {
    alert("Message envoyé avec succès !");
    this.router.navigate(["main-view"]);
  }
}
