import {PhysiqueModel} from './shared/physique.model';
import {PersonalinfoModel} from './shared/personalinfo.model';
import {ExperienceModel} from './shared/experience.model';
import {MealModel} from './shared/food.model';
import {RewardModel} from './shared/reward.model';
import {Pupil} from './shared/user.model';
import {UsersService} from './shared/users.service';
import {newArray} from '@angular/compiler/src/util';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DatabaseService {
  users: Pupil[];
  // selectedPupil = new EventEmitter<Pupil>();
  // baseUrl = 'http://35.246.214.109:8080';
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private usersService: UsersService) {
    console.log('Service created');
  }

  getAllUsers() {
    this.usersService.removeAllUsers();
    this.http.get(this.baseUrl + '/getallusers')
      .toPromise()
      .then(
        (data: Pupil[]) => {
          console.log(data);
          //console.log(data.slice(0, 1));
          this.users = data;
          //console.log(this.users.slice(0, 1));
          this.usersService.addUsers(this.users);
        }
      );
  }

  saveUser(user: Pupil) {
    this.http.put(this.baseUrl + '/saveuser', user)
      .toPromise()
      .then((data: JSON) => {
        console.log(data);
      });
  }

  createUser(user: Pupil) {
    this.http.post(this.baseUrl + '/createUser', user)
      .toPromise()
      .then((data: JSON) => {
        console.log(data);
      });
  }


  getUser(userID: string) {
    this.http.get(this.baseUrl + '/getuser')
      .toPromise()
      .then(
        (data: string) => {
          console.log(data);
        }
      );
  }

  deleteUser(userID: string) {
    const httpParams = new HttpParams().set('uid', userID);
    const options = {params: httpParams};
    // const options = this.makeOption(userID);
    // console.log(options);
    this.http.delete(this.baseUrl + '/deleteuser', options)
      .toPromise()
      .then(
        (data: boolean) => {
          console.log(data);
        }
      );
    console.log('Deleting ' + userID);
  }
}

