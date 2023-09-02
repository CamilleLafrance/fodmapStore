import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/model/user/user';

@Component({
  selector: 'app-users-list-form',
  templateUrl: './users-list-form.component.html',
  styleUrls: ['./users-list-form.component.css']
})
export class UsersListFormComponent {
    
  listUsers: Array<User> = [];
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next : data =>{ 
        this.listUsers = data;
      },
      error : messageError => {
        console.error(messageError);
      }
    });
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe((listUsers) => {
      this.listUsers = listUsers;
    });
  }

  deleteUser(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.userService.deleteUser(id).subscribe(() => { 
        this.loadUsers();
      });
    }
  }
}
