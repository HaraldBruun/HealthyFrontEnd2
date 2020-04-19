import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  @Output() eventEmitterLogin = new EventEmitter<string>();
  Users = [];

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
    this.http.get('http://localhost:8080/getUsers')
      .subscribe(user => {
        console.log(user);
      });
  }
}


