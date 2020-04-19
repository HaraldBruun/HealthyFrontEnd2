import {PhysiqueModel} from './physique.model';
import {PersonalinfoModel} from './personalinfo.model';
import {ExperienceModel} from './experience.model';
import {MealModel} from './food.model';
import {RewardModel} from './reward.model';

abstract class UserModel {
  private _username: string;
  private _password: string;
  private _uid: string;
  private _first_time_loggedin: boolean;

  constructor(username: string, password: string, uid: string, first_time_loggedin: boolean) {
    this._username = username;
    this._password = password;
    this._uid = uid;
    this._first_time_loggedin = first_time_loggedin;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get uid(): string {
    return this._uid;
  }

  set uid(value: string) {
    this._uid = value;
  }

  get first_time_loggedin(): boolean {
    return this._first_time_loggedin;
  }

  set first_time_loggedin(value: boolean) {
    this._first_time_loggedin = value;
  }
}

export class Pubil extends UserModel {
  get physique(): PhysiqueModel {
    return this._physique;
  }

  set physique(value: PhysiqueModel) {
    this._physique = value;
  }

  get personalinfo(): PersonalinfoModel {
    return this._personalinfo;
  }

  set personalinfo(value: PersonalinfoModel) {
    this._personalinfo = value;
  }

  get experience(): ExperienceModel {
    return this._experience;
  }

  set experience(value: ExperienceModel) {
    this._experience = value;
  }

  get meals(): MealModel[] {
    return this._meals;
  }

  set meals(value: MealModel[]) {
    this._meals = value;
  }

  get friends(): string[] {
    return this._friends;
  }

  set friends(value: string[]) {
    this._friends = value;
  }

  get activities(): string[] {
    return this._activities;
  }

  set activities(value: string[]) {
    this._activities = value;
  }

  get rewards(): RewardModel[] {
    return this._rewards;
  }

  set rewards(value: RewardModel[]) {
    this._rewards = value;
  }

  private _physique: PhysiqueModel;
  private _personalinfo: PersonalinfoModel;
  private _experience: ExperienceModel;

  private _meals: MealModel[];
  private _friends: string[];
  private _activities: string[];
  private _rewards: RewardModel[];

  constructor(username: string, password: string, uid: string, first_time_loggedin: boolean,
              physique: PhysiqueModel, personalinfo: PersonalinfoModel, experience: ExperienceModel,
              meals: MealModel[], friends: string[], activities: string[], rewards: RewardModel[]) {
    super(username, password, uid, first_time_loggedin);
    this._physique = physique;
    this._personalinfo = personalinfo;
    this._experience = experience;
    this._meals = meals;
    this._friends = friends;
    this._activities = activities;
    this._rewards = rewards;

  }
}


