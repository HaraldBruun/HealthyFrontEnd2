import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
import {Pupil} from '../../shared/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selectedUser: Pupil;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.selectedUser.subscribe(
      (user: Pupil) => {
        this.selectedUser = user;
      });
  }

}
