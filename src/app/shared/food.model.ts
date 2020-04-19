export class FoodModel {
  private _name: string;
  private _calories: number;
  private _protein: number;
  private _carbs: number;
  private _fat: number;

  constructor(name: string, calories: number, protein: number, carbs: number, fat: number) {
    this._name = name;
    this._calories = calories;
    this._protein = protein;
    this._carbs = carbs;
    this._fat = fat;
  }

  get name(): string {
    return this._name;
  }

  get calories(): number {
    return this._calories;
  }

  get protein(): number {
    return this._protein;
  }

  get carbs(): number {
    return this._carbs;
  }

  get fat(): number {
    return this._fat;
  }
}

export class MealModel extends FoodModel{
  private _type_of_meal: string;
  private _date: number;

  constructor(name: string, calories: number, protein: number, carbs: number, fat: number, type_of_meal: string, date: number) {
    super(name, calories, protein, carbs, fat);
    this._type_of_meal = type_of_meal;
    this._date = date;
  }

  get type_of_meal(): string {
    return this._type_of_meal;
  }

  get date(): number {
    return this._date;
  }
}
