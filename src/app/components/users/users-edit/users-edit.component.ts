import {Component, OnInit} from '@angular/core';
import {Pupil} from "../../../shared/user.model";
import {PopUpComponent} from "../users-detail/pop-up/pop-up.component";
import {MatDialog} from "@angular/material/dialog";
import {UsersService} from "../../../shared/users.service";
import {DatabaseService} from "../../../database.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  user: Pupil;
  dummyUser: Pupil;
  popUpType = '';

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private usersService: UsersService, private databaseService: DatabaseService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.user = this.usersService.getUser(id);
        this.initDummyUser();
      }
    );
  }

  onConfirmClick() {
    this.popUpType = 'SAVE';
    this.openDialog();
  }

  onCancelClick() {
    //this.canEditCode = false;
    this.dummyUser = <Pupil>JSON.parse(JSON.stringify(this.user));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpComponent, {
      data: {
        var: this.popUpType,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result === 'SAVE') {
        this.updateUser();
        //this.canEditCode = false;
        this.saveChangesToDatabase();
        console.log(this.user);
        console.log(this.usersService.getUsers());
      }
    });
  }

  //Hardcoded lige nu
  updateUser() {
    this.user.username = this.dummyUser.username;
    this.user.password = this.dummyUser.password;
    this.user.uid = this.dummyUser.uid;
    this.user.personalInfo = this.dummyUser.personalInfo;
    this.user.activities = this.dummyUser.activities;
    this.user.physique = this.dummyUser.physique;
    this.user.experience = this.dummyUser.experience;
    this.user.friends = this.dummyUser.friends;
    this.user.meals = this.dummyUser.meals;
    this.user.rewards = this.dummyUser.rewards;
    this.user.first_Time_LoggedIn = this.dummyUser.first_Time_LoggedIn;

  }

  initDummyUser() {
    this.dummyUser = <Pupil>JSON.parse(JSON.stringify(this.user));
  }

  saveChangesToDatabase() {
    this.databaseService.saveUser(this.user);
  }


}
