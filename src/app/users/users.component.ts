import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users = this.data.users;

  constructor(private data: DataService) {}

}
