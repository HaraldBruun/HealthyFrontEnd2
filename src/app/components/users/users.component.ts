import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {Pupil} from '../../shared/user.model';
import {DatabaseService} from '../../database.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  selectedUser: Pupil;

  constructor(private usersService: UsersService, private databaseService: DatabaseService, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.usersService.selectedUser.subscribe(
      (user: Pupil) => {
        this.selectedUser = user;
      });
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'lightGreen';
  }

}
