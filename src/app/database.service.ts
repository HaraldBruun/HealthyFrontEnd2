import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TestObject} from './shared/test.object';
import {PhysiqueModel} from './shared/physique.model';
import {PersonalinfoModel} from './shared/personalinfo.model';
import {ExperienceModel} from './shared/experience.model';
import {MealModel} from './shared/food.model';
import {RewardModel} from './shared/reward.model';
import {Pupil} from './shared/user.model';

@Injectable({providedIn: 'root'})
export class DatabaseService {
  users: Pupil[];
  selectedPupil = new EventEmitter<Pupil>();
  baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) {
    console.log('Service created');

  }

  getAllUsers() {
    this.http.get(this.baseUrl + '/getallusers')
      .toPromise()
      .then(
        data => console.log(data)
      );
  }


  saveUser() {
    // const tObj = new TestObject('OOOanton123', 123);
    const username = 'anton123';
    const password = '123123';
    const uid = 'haraldSpiserCheese';
    const first_time = false;
    const phys = new PhysiqueModel(180, 80, 1);
    const personal_info = new PersonalinfoModel('Anton', 'Hansen', 'male',
      123123, 2820);
    const xp = new ExperienceModel(1, 1, 1, 1, 1,
      false, false, false, false);
    let meals: MealModel[];
    let friends: string[];
    let activities: string[];
    let rewards: RewardModel[];

    const new_pupil = new Pupil(username, password, uid, first_time, phys, personal_info, xp,
      meals, friends, activities, rewards);

    this.http.post(this.baseUrl + '/saveuser', new_pupil)
      .toPromise()
      .then((data: JSON) => {
        console.log(data);
      });

    // this.http.post('http://localhost:8080/newtestpost', tObj)
    //   .subscribe(
    //     data => console.log('123', data),
    //     error => console.log('oops ', error)
    //   );
    // ).toPromise()
    //   .then(
    //     data => {
    //       console.log(data);
    //       console.log('123');
    //     }
    //   );

    // this.http.post('http://localhost:8080/newtestpost', tObj)
    //   .toPromise()
    //   .then((data: JSON) => {
    //     console.log(data);
    //   });
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


}
