import {Pupil} from '../../../shared/user.model';
import {MatDialog} from '@angular/material/dialog';
import {PopUpComponent} from './pop-up/pop-up.component';
import {DatabaseService} from '../../../database.service';
import {UsersService} from '../../../shared/users.service';
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css'],
})
export class UsersDetailComponent implements OnInit, OnChanges {
  user: Pupil;
  dummyUser: Pupil;
  canEditCode = false;
  userSaved = false;
  popUpType = '';
  id: number;

  constructor(public dialog: MatDialog, private usersService: UsersService, private databaseService: DatabaseService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.user = this.usersService.getUser(this.id);
        this.initDummyUser();
      }
    );

  }

  ngOnChanges(changes: SimpleChanges) {
    const previousUser = changes.user.previousValue as Pupil;
    const currentUser = changes.user.currentValue as Pupil;
    if (this.canEditCode) {
      this.user = previousUser;
    } else {
      this.initDummyUser();
    }

    console.log('Previous: ' + (previousUser ? previousUser.personalInfo.firstName : 'NULL'));
    console.log('To be changed ' + currentUser.personalInfo.firstName);
  }


  checkForChange() {

  }

  initDummyUser() {
    this.dummyUser = <Pupil>JSON.parse(JSON.stringify(this.user));
  }

  onEditClick() {
    this.canEditCode = true;
    console.log('Fuck Angular');
  }

  onConfirmClick() {
    this.popUpType = 'SAVE';
    this.openDialog();
  }

  onCancelClick() {
    this.canEditCode = false;
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
        this.canEditCode = false;
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

  saveChangesToDatabase() {
    this.databaseService.saveUser(this.user);
  }


}
