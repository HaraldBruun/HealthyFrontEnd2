import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TestObject} from '../shared/test.object';
import {Pubil} from '../shared/user.model';
import {PhysiqueModel} from '../shared/physique.model';
import {PersonalinfoModel} from '../shared/personalinfo.model';
import {ExperienceModel} from '../shared/experience.model';
import {MealModel} from '../shared/food.model';
import {RewardModel} from '../shared/reward.model';

@Component({
  selector: 'app-database-connecter',
  templateUrl: './database-connecter.component.html',
  styleUrls: ['./database-connecter.component.css']
})
export class DatabaseConnecterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  saveUser() {

    const tObj = new TestObject('OOOanton123', 123)
    const username = "anton123";
    const password = "123123";
    const uid = "haraldSpiserCheese";
    const first_time = false;
    const phys = new PhysiqueModel(180, 80, 1)
    const personal_info = new PersonalinfoModel("Anton", "Hansen", "male",
      123123, 2820);
    const xp = new ExperienceModel(1, 1, 1, 1, 1,
      false, false, false, false)
    let meals: MealModel[];
    let friends: string[];
    let activities: string[];
    let rewards: RewardModel[];

    const new_pubil = new Pubil(username, password, uid, first_time, phys, personal_info, xp,
      meals, friends, activities, rewards);

    this.http.post('http://localhost:8080/saveuser', new_pubil)
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
    this.http.get('http://localhost:8080/getuser')
      .toPromise()
      .then(
        (data: string) => {
          console.log(data)
        }
      )



  }
}
