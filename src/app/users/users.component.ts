import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users = this.data.users;

  constructor(private data: UsersService) {}

  ngOnInit(): void {
    console.log('ngOnInit')
  }


  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
}
