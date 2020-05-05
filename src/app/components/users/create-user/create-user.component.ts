import {Component, OnInit} from '@angular/core';
import {Pupil} from '../../../shared/user.model';
import {DatabaseService} from '../../../database.service';
import {PhysiqueModel} from '../../../shared/physique.model';
import {PersonalinfoModel} from '../../../shared/personalinfo.model';
import {ExperienceModel} from '../../../shared/experience.model';
import {MealModel} from '../../../shared/food.model';
import {RewardModel} from '../../../shared/reward.model';
import {NotificationService} from '../../../shared/notification.service';
import {MatDialogRef} from '@angular/material/dialog';
import {UsersService} from '../../../shared/users.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(new Date().setDate(new Date().getDate() - 1));
  newUser: Pupil;
  gender: string;

  constructor(private router: Router, private route: ActivatedRoute,
              public usersService: UsersService, private databaseService: DatabaseService,
              private notificationService: NotificationService, public dialogRef: MatDialogRef<CreateUserComponent>) {
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.usersService.form.reset();
    this.dialogRef.close();
    this.usersService.initializeFormGroup();
    this.router.navigate(['/users'])
  }

  onSubmit() {
    if (this.usersService.form.valid) {
      this.createUser();
      this.notificationService.success('User saved.', 'OK');
      this.databaseService.createUser(this.newUser);
      this.onCancel();
    }
  }

// method that takes the data from the form
  createUser() {
    if (this.usersService.form.get('gender').value === '2') {
      this.gender = 'female';
    } else if (this.usersService.form.get('gender').value === '1') {
      this.gender = 'male';
    }
    const username = this.usersService.form.get('userName').value;
    const password = '123123';
    const uid = 'thisshouldhopefullybeligemeget';
    const first_time = false;
    const phys = new PhysiqueModel(
      this.usersService.form.get('height').value,
      this.usersService.form.get('weight').value,
      this.usersService.form.get('activityLevel').value);
    // Personal info
    const personal_info = new PersonalinfoModel(
      this.usersService.form.get('firstName').value,
      this.usersService.form.get('lastName').value, this.gender,
      this.usersService.form.get('dateOfBirth').value.getTime(), 2820);
    // experience
    const xp = new ExperienceModel(1, 0, 0, 0, 0,
      false, false, false, false);
    // empty arrays
    const meals: MealModel[] = [];
    const friends: string[] = [];
    const activities: string[] = [];
    const rewards: RewardModel[] = [];
    // Create pupil to upload to DB
    this.newUser = new Pupil(username, password, uid, first_time, phys, personal_info, xp,
      meals, friends, activities, rewards);

  }

  generatePassword() {
    // tslint:disable-next-line:one-variable-per-declaration
    let length = 8,
      charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      retVal = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    // console.log(retVal);
    return retVal;
  }

}
