import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Pupil} from '../../shared/user.model';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  @Output() eventEmitterLogin = new EventEmitter<string>();
  users: Pupil[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  clickFindUser(user: string): string {
    if (user === ' ') {
      alert('indtast email');
      return;
    }
  }

  private fetchUsers() {
    this.http.get<{ [key: string]: Pupil }>('http://localhost:8080/getUsers')
      .pipe(map(responseData  => {
        const userArray: Pupil[] = [];

        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            userArray.push({...responseData[key]});
          }
        }
        return userArray;
      }))
      .subscribe(user => {
        console.log(user);
        this.users = user;
      });
  }
}


