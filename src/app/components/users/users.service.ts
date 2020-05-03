import {EventEmitter, Injectable} from '@angular/core';
import {Pupil} from '../../shared/user.model';
// import {DatabaseService} from '../../database.service';
import {PhysiqueModel} from '../../shared/physique.model';
import {PersonalinfoModel} from '../../shared/personalinfo.model';
import {ExperienceModel} from '../../shared/experience.model';
import {MealModel} from '../../shared/food.model';
import {RewardModel} from '../../shared/reward.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({providedIn: 'root'})
export class UsersService {
  selectedUser = new EventEmitter<Pupil>();
  usersChanged = new EventEmitter<Pupil[]>();
  private users: Pupil[] = [];

  /* lort
  username = 'anton123';
  password = '123123';
  uid = 'alexErEnB';
  first_time = false;
  phys = new PhysiqueModel(180, 80, 1);
  personal_info = new PersonalinfoModel('Anton', 'Hansen', 'male',
    123123, 2820);
  xp = new ExperienceModel(1, 1, 1, 1, 1,
    false, false, false, false);
  meals: MealModel[];
  friends: string[];
  activities: string[];
  rewards: RewardModel[];


   = [
    new Pupil(this.username, this.password, this.uid, this.first_time, this.phys, this.personal_info, this.xp,
      this.meals, this.friends, this.activities, this.rewards)];
*/
  constructor() {
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('1', Validators.required),
    weight: new FormControl('', [Validators.required, Validators.minLength(1)]),
    height: new FormControl('', [Validators.required, Validators.minLength(1)]),
    activityLevel: new FormControl('1', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    password: new FormControl()
  });

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

  // populateUsers() {
  //   this.databaseService.getAllUsers();
  // }


  deleteUser(user: Pupil) {
    //TODO: implement this
    // this.users.splice(user,1)
  }
}
