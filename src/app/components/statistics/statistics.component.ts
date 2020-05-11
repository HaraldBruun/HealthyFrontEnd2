import {Component, OnInit, NgModule} from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserModule} from '@angular/platform-browser';
import {single} from './data';
import {UsersService} from '../../shared/users.service';
import {DatabaseService} from '../../database.service';
import {Pupil} from '../../shared/user.model';
import {ActivatedRoute, Params} from "@angular/router";

function setSingleSingle(id: number, name: string, value: number) {
  single[id].name = name;
  single[id].value = value;
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Virker ikke helt
function addSingleSingle(name: any, value: any) {
  this.colorScheme.push(generateRandomColour());
  this.single.push({
    'name': name,
    'value': value
  });
}

function generateRandomColour() {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  user: Pupil;
  id: number;
  single: any[];
  users: Pupil[];
  view: any[] = [700, 400];
  totalActivityXP = 0;
  totalSocialXP = 0;
  totalNutritionXP = 0;

  // Options
  legendTitle = '';
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  legendPosition = 'below';
  colorScheme = {
    domain: ['#a42036', '#33a125', '#4945c7']
  };
  showUserStats = true;

  constructor(private usersService: UsersService, private databaseService: DatabaseService,
              private route: ActivatedRoute) {
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
    this.route.paramMap.subscribe(params => {
      this.id = (+params.get('id'));
    });
    this.user = this.usersService.getUser(this.id)
    console.log(this.user.uid)
    this.databaseService.getAllUsers();
    this.users = this.usersService.getUsers();

    this.totalActivityXP = this.user.experience.activityXP;
    this.totalNutritionXP = this.user.experience.nutritionXP;
    this.totalSocialXP = this.user.experience.socialXP;
    console.log('total xp ' + this.totalActivityXP);

    this.updateDataToPupil()
  }

  updateDataToPupil() {
    // this.single = this.single.slice(0,3);
    this.single = [];

    // this.colorScheme.domain.push(generateRandomColour());
    this.single.push({
      'name': 'ActivityXP',
      'value': this.user.experience.activityXP
    });
    this.single = [...this.single];
    // this.colorScheme.domain.push(generateRandomColour());
    this.single.push({
      'name': 'NutritionXP',
      'value': this.user.experience.nutritionXP
    });
    this.single = [...this.single];
    // this.colorScheme.domain.push(generateRandomColour());
    this.single.push({
      'name': 'SocialXP',
      'value': this.user.experience.socialXP
    });
    this.single = [...this.single];
  }

  clickOnStatsClass() {
    console.log('leeee' + this.single.length)
    this.showUserStats = !this.showUserStats;

    this.single = [];

    let i = 0;
    for (let user in this.users) {
      // setSingleSingle(i, this.users[user].personalInfo.firstName, this.users[user].experience.totalXP);
      i++;
      console.log(i)

      this.colorScheme.domain.push(generateRandomColour());
      this.single.push({
        'name': this.users[user].personalInfo.firstName,
        'value': this.users[user].experience.totalXP
      });
      this.single = [...this.single];
      console.log('leeee123' + this.single.length)
      // setSingleSingle(i, this.users[user].personalInfo.firstName, this.users[user].experience.totalXP);
    }
  }

  clickOnStatsPupil() {
    this.showUserStats = !this.showUserStats;
    this.updateDataToPupil()
  }
}
