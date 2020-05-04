export class PhysiqueModel {
  private _height: number;
  private _weight: number;
  private _activity_Level: number

  constructor(height: number, weight: number, activity_level: number) {
    this._height = height;
    this._weight = weight;
    this._activity_Level = activity_level;
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

  get activity_Level(): number {
    return this._activity_Level;
  }

  set activity_Level(value: number) {
    this._activity_Level = value;
  }
}
