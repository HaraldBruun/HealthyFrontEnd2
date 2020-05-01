import {Component, OnInit, NgModule} from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserModule} from '@angular/platform-browser';
import {single} from './data';
import {UsersService} from '../../shared/users.service';
import {DatabaseService} from '../../database.service';
import {Pupil} from '../../shared/user.model';

function setSingleSingle(id: number, name: string, value: number) {
  single[id].name = name;
  single[id].value = value;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  single: any[];
  users: Pupil[];
  view: any[] = [700, 400];
  totalActivityXP = 0;
  totalSocialXP = 0;
  totalNutritionXP = 0;

  // Options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  legendPosition = 'below';

  colorScheme = {
    domain: ['#a42036', '#33a125', '#4945c7', '#'+(Math.random()*0xFFFFFF<<0).toString(16)]
  };


  constructor(private usersService: UsersService, private databaseService: DatabaseService) {
    Object.assign(this, {single});
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
    this.databaseService.getAllUsers();
    this.users = this.usersService.getUsers();
    this.usersService.usersChanged.subscribe(
      (users: Pupil[]) => {
        this.single == users;
        for (let user in users) {
          console.log(users[user]);
          this.totalActivityXP += this.users[user].experience.activityXP.valueOf();
          this.totalNutritionXP += this.users[user].experience.nutritionXP.valueOf();
          this.totalSocialXP += this.users[user].experience.socialXP.valueOf();
        }
        console.log('TotalActivityXP = ' + this.totalActivityXP);
        console.log('TotalNutritionXP = ' + this.totalNutritionXP);
        console.log('TotalSocialXP = ' + this.totalSocialXP);
      }
    );
  }
  clickOnStatisticsButton() {
    setSingleSingle(0, 'ActivityXP', this.totalActivityXP);
    setSingleSingle(1, 'NutritionXP', this.totalNutritionXP);
    setSingleSingle(2, 'SocialXP', this.totalSocialXP);
    //this.single.push('Hej',10); Virker ikke pga. der ikke er oprettet en single til objektet før.

    // VERY FUCKING IMPORTANT FOR UPDATING
    this.single = [...this.single];
  }
}
