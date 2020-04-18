export class PupilModel {
  private _fullname: string;
  private _age: number;

  constructor(fullName: string, age: number) {
    this._fullname = fullName;
    this._age = age;
  }

  get fullname(): string {
    return this._fullname;
  }

  set fullname(value: string) {
    this._fullname = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}
