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
  }

  clickFindUser(user: string): string {
    if (user === ' ') {
      alert('indtast email');
      return;
    }
  }
}


