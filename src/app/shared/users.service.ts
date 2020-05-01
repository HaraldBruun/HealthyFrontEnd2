import {EventEmitter, Injectable} from '@angular/core';
import {Pupil} from './user.model';
// import {DatabaseService} from '../../database.service';
import {PhysiqueModel} from './physique.model';
import {PersonalinfoModel} from './personalinfo.model';
import {ExperienceModel} from './experience.model';
import {MealModel} from './food.model';
import {RewardModel} from './reward.model';

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