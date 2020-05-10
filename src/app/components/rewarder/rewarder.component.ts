import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-rewarder',
  templateUrl: './rewarder.component.html',
  styleUrls: ['./rewarder.component.css']
})
export class RewarderComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>; //skal være til array-listen.
rewardList;
rewardID;
rewardName;
rewardCurrentAmount;
rewardTotalCapacity;

  displayedColumns = ['id', 'name', 'current amount', 'total capacity'];
  searchKey: string;
  constructor() { }

  ngOnInit() {
    this.rewardList = [
      {id: '1', name: 'juice', currentAmount: '2', totalCapacity: '10'},
      {id: '2', name: 'frugt', currentAmount: '3', totalCapacity: '20'},
      {id: '3', name: 'snack', currentAmount: '4', totalCapacity: '20'},
      {id: '4', name: 'bar', currentAmount: '5', totalCapacity: '20'},
      {id: '5', name: 'drink', currentAmount: '10', totalCapacity: '20'},
      {id: '6', name: 'bold', currentAmount: '1', totalCapacity: '3'},
    ];
    this.rewardList = [...this.rewardList];
  }
//https://www.youtube.com/watch?v=iwSYpb_zKGw&t=89s lavet array, add og delete grundet denne video.

  addReward() {
    console.log(this.rewardID + '' + this.rewardName);
    this.rewardList.push(
      {name: this.rewardName}
    );
    this.rewardList = [...this.rewardList];
  }

  deleteReward(name) {
    console.log(name);

    for (let i = 0 ; i < this.rewardList.length; i++) {

      // tslint:disable-next-line:triple-equals ---- name skal måske være ["name"]??
      if (this.rewardList[i].name == name) {
        this.rewardList.splice(i, 1);
      }
    }
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilters();
  }

  applyFilters() {
    this.rewardList.filter = this.searchKey.trim().toLocaleLowerCase();
  }

}
