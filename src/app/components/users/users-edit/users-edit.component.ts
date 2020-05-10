import {Component, OnInit} from '@angular/core';
import {Pupil} from '../../../shared/user.model';
import {MatDialog} from '@angular/material/dialog';
import {UsersService} from '../../../shared/users.service';
import {DatabaseService} from '../../../database.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CanComponentDeactivate} from './can-deactivate-guard.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit, CanComponentDeactivate {
  user: Pupil;
  dummyUser: Pupil;
  popUpType = '';
  updatesSaved = false;
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(new Date().setDate(new Date().getDate() - 1));
  private gender: string;

  constructor(private route: ActivatedRoute, public dialog: MatDialog,
              private router: Router, public usersService: UsersService, private databaseService: DatabaseService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.user = this.usersService.getUser(id);
        this.initDummyUser();
      }
    );
    this.usersService.initializeEditGroup(this.dummyUser);
  }

  onConfirmClick() {
    confirm('Do you want to save changes?') ? this.saveUser() : console.log('changes not saved');
    if (this.updatesSaved) {
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

  saveUser() {
    this.updatesSaved = true;
    this.updateUser();
    this.saveChangesToDatabase();
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.updatesSaved) {
      return confirm('Do you want to discard changes?');
    } else {
      return true;
    }
  }

  onCancelClick() {
    //this.canEditCode = false;
    this.dummyUser = <Pupil> JSON.parse(JSON.stringify(this.user));
    const id = this.route.snapshot.params['id'];
    this.router.navigate(['/users/' + id]);
  }

  //Hardcoded lige nu
  updateUser() {
    if (this.usersService.formEdit.get('gender').value === '2') {
      this.gender = 'female';
    } else if (this.usersService.formEdit.get('gender').value === '1') {
      this.gender = 'male';
    }
    this.user.username = this.usersService.formEdit.get('userName').value;

    this.user.personalInfo.firstName = this.usersService.formEdit.get('firstName').value;
    this.user.personalInfo.lastName = this.usersService.formEdit.get('lastName').value;
    this.user.personalInfo.dateOfBirth = this.usersService.formEdit.get('dateOfBirth').value.getTime();
    this.user.personalInfo.gender = this.gender;

    this.user.physique.height = this.usersService.formEdit.get('height').value;
    this.user.physique.weight = this.usersService.formEdit.get('weight').value;
    this.user.physique.activityLevel = this.usersService.formEdit.get('activityLevel').value;

    this.user.experience.nutritionXP = this.usersService.formEdit.get('nutritionXP').value;
    this.user.experience.activityXP = this.usersService.formEdit.get('activityXP').value;
    this.user.experience.socialXP = this.usersService.formEdit.get('socialXP').value;
  }

  initDummyUser() {
    this.dummyUser = <Pupil> JSON.parse(JSON.stringify(this.user));
  }

  saveChangesToDatabase() {
    console.log(this.user);
    this.databaseService.saveUser(this.user);
  }
}
