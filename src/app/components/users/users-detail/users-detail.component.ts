import {Pupil} from '../../../shared/user.model';
import {MatDialog} from '@angular/material/dialog';
import {PopUpComponent} from './pop-up/pop-up.component';
import {DatabaseService} from '../../../database.service';
import {UsersService} from '../../../shared/users.service';
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css'],
})
export class UsersDetailComponent implements OnInit, OnChanges {
  user: Pupil;
  dummyUser: Pupil;
  canEditCode = false;
  id: number;

  constructor(private usersService: UsersService, private databaseService: DatabaseService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.user = this.usersService.getUser(this.id);
        this.initDummyUser();
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    const previousUser = changes.user.previousValue as Pupil;
    const currentUser = changes.user.currentValue as Pupil;
    if (this.canEditCode) {
      this.user = previousUser;
    } else {
      this.initDummyUser();
    }

    console.log('Previous: ' + (previousUser ? previousUser.personalInfo.firstName : 'NULL'));
    console.log('To be changed ' + currentUser.personalInfo.firstName);
  }

  initDummyUser() {
    this.dummyUser = <Pupil>JSON.parse(JSON.stringify(this.user));
  }

  onDelete() {
    confirm('Delete this user?') ? this.databaseService.deleteUser(this.user.uid) : console.log('User not deleted')
  }
}
