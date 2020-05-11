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
    {ID: 512, name: 'Banan', chance: 15, active: 214, redeemed: 183},
    {ID: 209, name: 'Elastik-bånd', chance: 2, active: 14, redeemed: 3},
    {ID: 314, name: 'Sportssko', chance: 0.5, active: 0, redeemed: 1},
    {ID: 400, name: 'Cykel', chance: 0.1, active: 0, redeemed: 0},
    {ID: 281, name: '10,- til kantinen', chance: 3, active: 18, redeemed: 20},
    {ID: 283, name: 'Boksjuice', chance: 7, active: 101, redeemed: 78},
    {ID: 139, name: '5,- til kantinen', chance: 4, active: 31, redeemed: 40},
    {ID: 4, name: 'Proteinbar', chance: 3, active: 41, redeemed: 27},
    {ID: 723, name: 'MacBook', chance: 0.001, active: 0, redeemed: 0}
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
