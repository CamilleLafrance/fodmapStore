import { Component, Input } from '@angular/core';
import { User } from 'src/model/user/user';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent {
  @Input() user!: User;
}
