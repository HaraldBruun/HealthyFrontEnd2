export class ExperienceModel {
  private _level: number;
  private _nutritionXP: number;
  private _activityXP: number;
  private _socialXP: number;
  private _ticket: number;
  private _xpforCalories: boolean;
  private _xpforProtein: boolean;
  private _xpforCarbs: boolean;
  private _xpforFat: boolean;
  private _totalXP: number;

  constructor(level: number, nutritionXP: number, activityXP: number, socialXP: number,
              ticket: number, XPForCalories: boolean, XPForProtein: boolean,
              XPForCarbs: boolean, XPForFat: boolean) {

    this._level = level;
    this._nutritionXP = nutritionXP;
    this._activityXP = activityXP;
    this._socialXP = socialXP;
    this._ticket = ticket;
    this._xpforCalories = XPForCalories;
    this._xpforProtein = XPForProtein;
    this._xpforCarbs = XPForCarbs;
    this._xpforFat = XPForFat;
    this._totalXP = this._activityXP + this._nutritionXP + this._socialXP;
  }


  get totalXP(): number {
    return this._totalXP;
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

  get xpforCalories(): boolean {
    return this._xpforCalories;
  }

  set xpforCalories(value: boolean) {
    this._xpforCalories = value;
  }

  get xpforProtein(): boolean {
    return this._xpforProtein;
  }

  set xpforProtein(value: boolean) {
    this._xpforProtein = value;
  }

  get xpforCarbs(): boolean {
    return this._xpforCarbs;
  }

  set xpforCarbs(value: boolean) {
    this._xpforCarbs = value;
  }

  get xpforFat(): boolean {
    return this._xpforFat;
  }

  set xpforFat(value: boolean) {
    this._xpforFat = value;
  }
}
