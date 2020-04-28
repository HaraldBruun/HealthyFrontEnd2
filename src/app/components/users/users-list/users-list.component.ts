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
  isFetching = false;

  constructor(private usersService: UsersService, private _databaseService: DatabaseService) {
  }


  get databaseService(): DatabaseService {
    return this._databaseService;
  }

  ngOnInit() {
    this.isFetching = true;
    this._databaseService.getAllUsers();
    this.users = this.usersService.getUsers();
    this.usersService.usersChanged.subscribe(
      (users: Pupil[]) => {
        this.users = users;
        this.isFetching = false;
      }
    );
  }

  refreshUsers() {
    this.isFetching = true;
    this.databaseService.getAllUsers();
    this.isFetching = false;
  }

}
