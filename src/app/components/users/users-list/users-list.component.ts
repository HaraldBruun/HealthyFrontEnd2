import {Component, OnInit} from '@angular/core';
import {Pupil} from '../../../shared/user.model';
import {UsersService} from '../users.service';
import {DatabaseService} from '../../../database.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Pupil[];
  isFetching = false;
  myControl = new FormControl();

  constructor(private usersService: UsersService, private databaseService: DatabaseService) {
  }

  ngOnInit() {
    this.isFetching = true;
    this.databaseService.getAllUsers();
    this.users = this.usersService.getUsers();
    this.usersService.usersChanged.subscribe(
      (users: Pupil[]) => {
        this.users = users;
        this.isFetching = false;
        this.initStudentNames();
      }
    );
    console.log(this.options);
  }

  refreshUsers() {
    this.databaseService.getAllUsers();
  }

  initStudentNames() {
    console.log(this.users);
    this.users.forEach(user => {
      let fullName = '';
      console.log('this code');
      if (user.personalInfo.firstName.length === 0) {
        fullName = 'No Name';
      } else {
        fullName = user.personalInfo.firstName + ' ' + user.personalInfo.lastName;
      }
      this.options.push(fullName);
    });

  }
}
