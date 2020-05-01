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

  showFeature($event: string) {
    switch ($event) {
      case 'manage_users':
        this.showUsers = true;
        this.showStats = false;
        break;
      case 'statistics':
        this.showUsers = false;
        this.showStats = true;
        break;
    }
  }
}
