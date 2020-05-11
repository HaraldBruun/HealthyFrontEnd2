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
    // -- virker --
    // this.usersService.usersChanged.subscribe(
    //   (users: Pupil[]) => {
    //     for (let user in users) {
    //       // console.log(users[user]);
    //       this.totalActivityXP += this.users[user].experience.activityXP.valueOf();
    //       this.totalNutritionXP += this.users[user].experience.nutritionXP.valueOf();
    //       this.totalSocialXP += this.users[user].experience.socialXP.valueOf();
    //     }
    //   }
    // );
    this.clickOnStatisticsUpdate()
  }

  clickOnStatisticsUpdate() {
    setSingleSingle(0, 'ActivityXP', this.totalActivityXP);
    setSingleSingle(1, 'NutritionXP', this.totalNutritionXP);
    setSingleSingle(2, 'SocialXP', this.totalSocialXP);

    // addSingleSingle(hej, 10); Virker ikke lige pt,

    // IMPORTANT FOR UPDATING
    this.single = [...this.single];
  }

  clickOnStatisticsTest() {
    this.showUserStats = !this.showUserStats;
    // addSingleSingle('Hej', 10); TODO : Virker ikke, fejl med JSON og binding med name og value.
    // this.colorScheme.domain.push(generateRandomColour());
    // this.single.push({
    //   'name': 'TEST 1',
    //   'value': 4
    // });
    // console.log(generateRandomColour());
    // this.single = [...this.single];
  }

  clickOnStatisticsTest2() {
    // addSingleSingle('Hej', 10); TODO : Slet, bare for at vise farver
    this.colorScheme.domain.push(generateRandomColour());
    this.single.push({
      'name': 'TEST 2',
      'value': 8
    });
    this.single = [...this.single];
  }
}
