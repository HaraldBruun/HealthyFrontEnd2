import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {Pupil} from '../../../shared/user.model';
import {UsersService} from '../../../shared/users.service';
import {DatabaseService} from '../../../database.service';
import {FormControl} from '@angular/forms';
import {Observable, observable, pipe} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CreateUserComponent} from '../create-user/create-user.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Pupil[];
  isFetching = false;
  myControl = new FormControl();
  filteredOptions: Observable<Pupil[]>;
  userDisplayList: Pupil[] = [];

  constructor(private usersService: UsersService, private databaseService: DatabaseService,
              private elementRef: ElementRef, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.isFetching = true;
    this.databaseService.getAllUsers();
    this.users = this.usersService.getUsers();
    this.usersService.usersChanged.subscribe(
      (users: Pupil[]) => {
        this.users = users;
        this.userDisplayList = users;
        this.isFetching = false;
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(username => username ? this._filter(username) : this.users.slice())
        );
      }
    );
  }

  private _filter(value: string): Pupil[] {
    const filterValue = value.toLowerCase();
    console.log(this.filteredOptions);
    this.userDisplayList = this.filteredOptions as unknown as Pupil[];
    return this.users.filter(option =>
      option.username.indexOf(filterValue) === 0);
  }

  refreshUsers() {
    this.databaseService.getAllUsers();
  }

  displayFn(user: Pupil): string {
    return user && user.username ? user.username : '';
  }

  updateDisplayList() {
    this.userDisplayList = [];
    this.filteredOptions.forEach(user => {
      user.forEach(user2 => {
        this.userDisplayList.push(user2);
      });
    });
  }

}
