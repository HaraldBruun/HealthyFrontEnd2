import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {Pupil} from '../../../shared/user.model';
import {MatDialog} from '@angular/material/dialog';
import {PopUpComponent} from './pop-up/pop-up.component';
import {UsersService} from '../users.service';
import {DatabaseService} from '../../../database.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css'],
})
export class UsersDetailComponent implements OnInit, OnChanges {
  @Input() user: Pupil;
  dummyUser: Pupil;
  canEditCode = false;
  userSaved = false;
  popUpType = '';

  constructor(public dialog: MatDialog, private usersService: UsersService, private databaseService: DatabaseService) {
  }

  ngOnInit(): void {
    this.dummyUser = <Pupil> JSON.parse(JSON.stringify(this.user));
  }

  ngOnChanges(changes: SimpleChanges) {
    const previousUser = changes.user.previousValue as Pupil;
    const currentUser = changes.user.currentValue as Pupil;

    console.log('Previous: ' + (previousUser ? previousUser.personalInfo.firstName : 'NULL'));
    console.log('To be changed ' + currentUser.personalInfo.firstName);
  }

  checkForChange() {

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
    this.dummyUser = <Pupil> JSON.parse(JSON.stringify(this.user));
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
    this.user.first_time_loggedin = this.dummyUser.first_time_loggedin;

  }

  saveChangesToDatabase() {
    this.databaseService.saveUser(this.user);
  }


}
