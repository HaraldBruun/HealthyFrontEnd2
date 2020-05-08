export class PhysiqueModel {
  private _height: number;
  private _weight: number;
  private _activityLevel: number

  constructor(height: number, weight: number, activity_level: number) {
    this._height = height;
    this._weight = weight;
    this._activityLevel = activity_level;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get activityLevel(): number {
    return this._activityLevel;
  }

  set activityLevel(value: number) {
    this._activityLevel = value;
  }
}
