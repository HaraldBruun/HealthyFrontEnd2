import {Component, Input, OnInit} from '@angular/core';
import {Pupil} from '../../../shared/user.model';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  @Input() user: Pupil;
  canEditCode = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  setTitleEdit() {

  }

  onEditClick() {
    this.canEditCode = true;
    console.log('Fuck ANgular');
  }

  onConfirmClick(){
    this.canEditCode = false;
  }


}
