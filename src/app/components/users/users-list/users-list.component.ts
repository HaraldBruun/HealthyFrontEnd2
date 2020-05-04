import {Pupil} from '../../../shared/user.model';
import {UsersService} from '../../../shared/users.service';
import {DatabaseService} from '../../../database.service';
import {FormControl} from '@angular/forms';
import {Observable, observable, pipe} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CreateUserComponent} from '../create-user/create-user.component';
import {Component, ElementRef, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Pupil[];
  isFetching = false;
  myControl = new FormControl();
  userDisplayList: Pupil[] = [];

  constructor(private usersService: UsersService, private databaseService: DatabaseService,
              private elementRef: ElementRef, private dialog: MatDialog) {
  }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['firstName'];

  ngOnInit() {
    this.databaseService.getAllUsers();
    this.listData = new MatTableDataSource(this.users).;
    this.users = this.usersService.getUsers();
    console.log(this.users);
  }
}
