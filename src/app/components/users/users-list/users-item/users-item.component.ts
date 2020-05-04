import {Pupil} from '../../../../shared/user.model';
import {UsersService} from '../../../../shared/users.service';
import {DatabaseService} from '../../../../database.service';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.css']
})
export class UsersItemComponent implements OnInit {
  @Input() user: Pupil;

  constructor(private usersService: UsersService, private databaseService: DatabaseService) {
  }

  ngOnInit(): void {
  }

  onClickItem() {
    this.usersService.selectedUser.emit(this.user);
  }

  onClickDelete() {
    this.usersService.deleteUser(this.user);
    this.databaseService.deleteUser(this.user.uid);
  }

}
