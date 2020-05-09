import {EventEmitter, Injectable} from '@angular/core';
import {Pupil} from './user.model';
// import {DatabaseService} from '../../database.service';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({providedIn: 'root'})
export class UsersService {
  selectedUser = new EventEmitter<Pupil>();
  usersChanged = new EventEmitter<Pupil[]>();
  private users: Pupil[] = [];

  constructor() {
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('1', Validators.required),
    weight: new FormControl('', [Validators.required, Validators.min(0)]),
    height: new FormControl('', [Validators.required, Validators.min(0)]),
    activityLevel: new FormControl('1', Validators.required),
    dateOfBirth: new FormControl(new Date())
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      firstName: '',
      lastName: '',
      userName: '',
      gender: '1',
      weight: '',
      height: '',
      activityLevel: '1',
      dateOfBirth: new Date()
    });
  }

  formEdit: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('1', Validators.required),
    weight: new FormControl('', [Validators.required, Validators.min(0)]),
    height: new FormControl('', [Validators.required, Validators.min(0)]),
    activityLevel: new FormControl('1', Validators.required),
    dateOfBirth: new FormControl(new Date()),
    nutritionXP: new FormControl('', Validators.required),
    activityXP: new FormControl('', Validators.required),
    socialXP: new FormControl('', Validators.required)
  });

  private date: Date;

  initializeEditGroup(user: Pupil) {
    let gender = '2';
    if (user.personalInfo.gender === 'male') {
      gender = '1';
    }
    console.log(user.physique.activityLevel);
    const activityLevel = user.physique.activityLevel.toString();
    const nutritionXPString = user.experience.nutritionXP.toString();
    const activityXPString = user.experience.activityXP.toString();
    const socialXPString = user.experience.socialXP.toString();

    console.log(gender.valueOf());
    this.date = new Date();
    this.date.setDate(user.personalInfo.dateOfBirth);
    this.formEdit.setValue({
      $key: null,
      firstName: user.personalInfo.firstName,
      lastName: user.personalInfo.lastName,
      userName: user.username,
      gender: gender.valueOf(),
      weight: user.physique.weight,
      height: user.physique.height,
      activityLevel: activityLevel.valueOf(),
      dateOfBirth: new Date(user.personalInfo.dateOfBirth),
      nutritionXP: nutritionXPString.valueOf(),
      activityXP: activityXPString.valueOf(),
      socialXP: socialXPString.valueOf(),
    });
  }

  getUsers(): Pupil[] {
    return this.users;
  }

  addUsers(users: Pupil[]) {
    this.users.push(...users);
    this.usersChanged.emit(this.users);
  }

  removeAllUsers() {
    while (this.users.length > 0) {
      this.users.pop();
    }
  }

  deleteUser(user: Pupil) {
    //TODO: implement this
    // this.users.splice(user,1)
  }

  getUser(id: number): Pupil {
    console.log(id);
    console.log(this.users[id]);
    return this.users[id];
  }
}
