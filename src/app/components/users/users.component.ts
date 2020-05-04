import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../shared/users.service';
import {Pupil} from '../../shared/user.model';
import {DatabaseService} from '../../database.service';
import {CreateUserComponent} from './create-user/create-user.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selectedUser: Pupil;

  constructor(private usersService: UsersService, private databaseService: DatabaseService,
              private elementRef: ElementRef, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.usersService.selectedUser.subscribe(
      (user: Pupil) => {
        this.selectedUser = user;
      });
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '60%';
    this.dialog.open(CreateUserComponent, dialogConfig);

  }


}
