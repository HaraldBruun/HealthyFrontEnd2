import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TestObject} from '../shared/test.object';
import {Pupil} from '../shared/user.model';
import {PhysiqueModel} from '../shared/physique.model';
import {PersonalinfoModel} from '../shared/personalinfo.model';
import {ExperienceModel} from '../shared/experience.model';
import {MealModel} from '../shared/food.model';
import {RewardModel} from '../shared/reward.model';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-database-connecter',
  templateUrl: './database-connecter.component.html',
  styleUrls: ['./database-connecter.component.css']
})
export class DatabaseConnecterComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
  }

  saveUser() {
   // this.databaseService.saveUser();
  }

  getUser(userID: string) {
    this.databaseService.getUser('heyhey');
    // this.http.get('http://localhost:8080/getuser')
    //   .toPromise()
    //   .then(
    //     (data: string) => {
    //       console.log(data)
    //     }
    //   )
  }

  getAllUsers() {
    this.databaseService.getAllUsers();
  }
}
