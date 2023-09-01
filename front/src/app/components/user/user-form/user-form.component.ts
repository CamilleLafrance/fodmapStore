import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/model/user/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user!: User;
  userForm: FormGroup | any;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: this.formBuilder.control(""),
      lastName: this.formBuilder.control(""),
      email: this.formBuilder.control(""),
      passwordHash: this.formBuilder.control(""),
      phoneNumber: this.formBuilder.control(""),
      dateOfBirth: this.formBuilder.control(""),
      address: this.formBuilder.control(""),
      postalCode: this.formBuilder.control(""),
      city: this.formBuilder.control(""),
      country: this.formBuilder.control(""), 
    });
  }

  updateUser(): void {
    let updatedUser = { ...this.user, ...this.userForm.value };
    this.userService.updateUser(updatedUser).subscribe({
      next: (data) => {
        console.log(data);
        alert("Vos modifications ont été enregistrées !");
        this.router.navigate(["user-profile"]);
      },
      error: (err) => {
        console.error(err);
        alert("✘ Une erreur est survenue");
        this.router.navigate(["user-profile"]);
      },
    });
  }
}
