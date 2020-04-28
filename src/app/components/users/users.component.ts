import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {Pupil} from '../../shared/user.model';
import {DatabaseService} from '../../database.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selectedUser: Pupil;

  constructor(private usersService: UsersService, private databaseService: DatabaseService) {
  }

  ngOnInit(): void {
    this.usersService.selectedUser.subscribe(
      (user: Pupil) => {
        this.selectedUser = user;
      });
  }

  refreshUsers() {
    this.databaseService.getAllUsers();
  }

}
