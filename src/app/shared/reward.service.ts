import {EventEmitter, Injectable} from '@angular/core';
import {Pupil} from './user.model';
// import {DatabaseService} from '../../database.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export interface Ref {
  ID: number;
  name: string;
  chance: number;
  active: number;
  redeemed: number;
}


@Injectable({providedIn: 'root'})
export class RewardService {

  private _DATA: Ref[] = [
    {ID: 1, name: 'banana', chance: 2, active: 5, redeemed: 1},
    {ID: 2, name: 'aanana', chance: 4, active: 10, redeemed: 0},
  ];


constructor() {
  }

form: FormGroup = new FormGroup({
    ID: new FormControl('', [Validators.required, Validators.min(0)]),
    name: new FormControl('', Validators.required),
    chance: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    active: new FormControl(0, Validators.required),
    redeemed: new FormControl(0, Validators.required)
  });

initializeFormGroup() {
    this.form.setValue({
      ID: '',
      name: '',
      chance: '',
      active: '',
      redeemed: ''
    });
  }
  addReward(ID: number, name: string, chance: number, active: number, redeemed: number) {
  var ref = {ID, name, chance, active, redeemed} as Ref;
  this.DATA.push(ref);
  }
  get DATA(): Ref[] {
    return this._DATA;
  }

  set DATA(value: Ref[]) {
    this._DATA = value;
  }
}
