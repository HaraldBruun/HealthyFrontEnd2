export class ExperienceModel {
  private _level: number;
  private _nutritionXP: number;
  private _activityXP: number;
  private _socialXP: number;
  private _ticket: number;
  private _XPForCalories: boolean;
  private _XPForProtein: boolean;
  private _XPForCarbs: boolean;
  private _XPForFat: boolean;

  constructor(level: number, nutritionXP: number, activityXP: number, socialXP: number,
              ticket: number, XPForCalories: boolean, XPForProtein: boolean,
              XPForCarbs: boolean, XPForFat: boolean) {

    this._level = level;
    this._nutritionXP = nutritionXP;
    this._activityXP = activityXP;
    this._socialXP = socialXP;
    this._ticket = ticket;
    this._XPForCalories = XPForCalories;
    this._XPForProtein = XPForProtein;
    this._XPForCarbs = XPForCarbs;
    this._XPForFat = XPForFat;
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
  }

  get nutritionXP(): number {
    return this._nutritionXP;
  }

  set nutritionXP(value: number) {
    this._nutritionXP = value;
  }

  get activityXP(): number {
    return this._activityXP;
  }

  set activityXP(value: number) {
    this._activityXP = value;
  }

  get socialXP(): number {
    return this._socialXP;
  }

  set socialXP(value: number) {
    this._socialXP = value;
  }

  get ticket(): number {
    return this._ticket;
  }

  set ticket(value: number) {
    this._ticket = value;
  }

  get XPForCalories(): boolean {
    return this._XPForCalories;
  }

  set XPForCalories(value: boolean) {
    this._XPForCalories = value;
  }

  get XPForProtein(): boolean {
    return this._XPForProtein;
  }

  set XPForProtein(value: boolean) {
    this._XPForProtein = value;
  }

  get XPForCarbs(): boolean {
    return this._XPForCarbs;
  }

  set XPForCarbs(value: boolean) {
    this._XPForCarbs = value;
  }

  get XPForFat(): boolean {
    return this._XPForFat;
  }

  set XPForFat(value: boolean) {
    this._XPForFat = value;
  }
}
