import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HealthyFrontEnd';
  loggedIn = false;
  showUsers = true;
  showStats: boolean;
  showRewards: boolean;


  showFeature($event: string) {
    switch ($event) {
      case 'manage_users':
        this.showUsers = true;
        this.showStats = false;
        this.showRewards = false;
        break;
      case 'statistics':
        this.showUsers = false;
        this.showStats = true;
        this.showRewards = false;
        break;
      case 'rewards':
        this.showUsers = false;
        this.showStats = false;
        this.showRewards = true;
        break;
    }

  }

  loggedInFeature($event: boolean) {
    this.loggedIn = $event;
  }

}
