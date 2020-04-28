import {Component} from '@angular/core';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HealthyFrontEnd';
  loggedIn = true;
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

  loggedInFeature($event: boolean){
    this.loggedIn = $event;
  }

}
