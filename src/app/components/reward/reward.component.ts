import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {CreaterewardComponent} from './createreward/createreward.component';
import {RewardService} from '../../shared/reward.service';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css']
})

export class RewardComponent implements OnInit {
  // private components: RewardtableModel[] = [
  //   new RewardtableModel(512, 'Banana', 20, 614, 253),
  //   new RewardtableModel(281, 'Elastik-bånd', 3, 32, 18),
  //   new RewardtableModel(146, 'Sportssko', 0.4, 1, 0),
  //   new RewardtableModel(709, 'Proteinbar', 4, 41, 12)
  // ];

  // Didnt work with RewardModel
  displayedColumns: string[] = ['ID', 'name', 'chance', 'active', 'redeemed'];
  dataSource = new MatTableDataSource(this.rewardService.DATA);

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private rewardService: RewardService) {
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.route.queryParams.subscribe(params => {
      if (params['dialog']) {
        this.onCreate();
      }
    });
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '30%';
    this.dialog.open(CreaterewardComponent, dialogConfig);
  }
}

