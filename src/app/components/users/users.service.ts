import {EventEmitter, Injectable} from '@angular/core';
import {Pupil} from '../../shared/user.model';
// import {DatabaseService} from '../../database.service';
import {PhysiqueModel} from '../../shared/physique.model';
import {PersonalinfoModel} from '../../shared/personalinfo.model';
import {ExperienceModel} from '../../shared/experience.model';
import {MealModel} from '../../shared/food.model';
import {RewardModel} from '../../shared/reward.model';

@Injectable({providedIn: 'root'})
export class UsersService {
  selectedUser = new EventEmitter<Pupil>();
  usersChanged = new EventEmitter<Pupil[]>();

  // lort
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
  // --

  private users: Pupil[] = [
    new Pupil(this.username, this.password, this.uid, this.first_time, this.phys, this.personal_info, this.xp,
      this.meals, this.friends, this.activities, this.rewards)];

  constructor() {
  }

  getUsers(): Pupil[] {
    return this.users.slice();
  }

  addUsers(users: Pupil[]) {
    this.users.push(...users);
    this.usersChanged.emit(this.users);
  }

  // populateUsers() {
  //   this.databaseService.getAllUsers();
  // }


}
