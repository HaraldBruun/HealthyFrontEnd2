import { Component, OnInit } from '@angular/core';
import {RewardService} from '../../../shared/reward.service';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createreward',
  templateUrl: './createreward.component.html',
  styleUrls: ['./createreward.component.css']
})
export class CreaterewardComponent implements OnInit {

  constructor(private router: Router, public rewardService: RewardService, public dialogRef: MatDialogRef<CreaterewardComponent>) { }

  ngOnInit(): void {
  }
  onCancel() {
    this.rewardService.form.reset();
    this.dialogRef.close();
    this.rewardService.initializeFormGroup();
    this.router.navigate(['/rewards']);
  }
  onSubmit() {
    if (this.rewardService.form.valid){
      this.createReward();
    }
  }
  createReward() {
    const ID = this.rewardService.form.get('ID').value;
    const name = this.rewardService.form.get('name').value;
    const chance = this.rewardService.form.get('chance').value;
    const active = this.rewardService.form.get('active').value;
    const redeemed = this.rewardService.form.get('redeemed').value;
    this.rewardService.addReward(ID, name, chance, active, redeemed);

    this.onCancel();
  }
}
