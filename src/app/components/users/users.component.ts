import {Component, ElementRef, OnInit} from '@angular/core';
import {UsersService} from '../../shared/users.service';
import {Pupil} from '../../shared/user.model';
import {DatabaseService} from '../../database.service';
import {CreateUserComponent} from './create-user/create-user.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selectedUser: Pupil;

  constructor(private usersService: UsersService, private databaseService: DatabaseService,
              private elementRef: ElementRef, private dialog: MatDialog, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.usersService.selectedUser.subscribe(
      (user: Pupil) => {
        this.selectedUser = user;
      });

    this.route.queryParams.subscribe(params => {
      if (params['dialog']) {
        this.onCreate();
      }
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
