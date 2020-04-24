import {Component, OnInit} from '@angular/core';
import {Pupil} from '../../../shared/user.model';
import {UsersService} from '../users.service';
import {DatabaseService} from '../../../database.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Pupil[];

  constructor(private usersService: UsersService, private databaseService: DatabaseService) {
  }

  ngOnInit() {
    this.databaseService.getAllUsers();
    this.users = this.usersService.getUsers();
    this.usersService.usersChanged.subscribe(
      (users: Pupil[]) => {
        this.users = users;
      }
    );
  }
}
