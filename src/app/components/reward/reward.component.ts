import {Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material/sort';
import {RewardModel} from '../../shared/reward.model';
import {DatabaseService} from '../../database.service';
import {Pupil} from '../../shared/user.model';
import {UsersService} from '../../shared/users.service';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})
export class RewardComponent implements OnInit {
  users: Pupil[];
  rewards: RewardModel[];
  components: RewardModel[] = [
    new RewardModel('AAA', 0, 500, false),
    new RewardModel('ZZZ', 10, 213213, true),
  ];

  sortedData: RewardModel[];

  constructor(private databaseService: DatabaseService, private usersService: UsersService) {
    this.sortedData = this.components.slice();
  }

  sortData(sort: Sort) {
    const data = this.components.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'tier':
          return compare(a.tier, b.tier, isAsc);
        case 'resource':
          return compare(a.resource, b.resource, isAsc);
        case 'redeemed':
          return compare(a.redeemed, b.redeemed, isAsc);
        default:
          return 0;
      }
    });
  }

  ngOnInit(): void {
    this.databaseService.getAllUsers();
    this.users = this.usersService.getUsers();
    console.log(this.users);
    this.usersService.usersChanged.subscribe(
      (users: Pupil[]) => {
        for (let user in this.users) {
          // for (let reward in this.users[user].rewards[]) {
          // }
          this.components.push(this.users[user].rewards[0]);
        }
      }
    );
    this.components = [...this.rewards];
  }
}

function compare(a: number | string | boolean, b: number | string | boolean, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
