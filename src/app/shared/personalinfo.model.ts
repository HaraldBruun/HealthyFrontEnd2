export class PersonalinfoModel {
  private _firstName: string;
  private _lastName: string;
  private _gender: string;
  private _dateOfBirth: number;
  private _zipCode: number;
  private _age: number;

  constructor(firstName: string, lastName: string, gender: string, dateOfBirth: number, zipCode: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._dateOfBirth = dateOfBirth;
    this._zipCode = zipCode;
    this._age = 10;
  }

  get age(): number {
    return this._age;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get dateOfBirth(): number {
    return this._dateOfBirth;
  }

  set dateOfBirth(value: number) {
    this._dateOfBirth = value;
  }

  get zipCode(): number {
    return this._zipCode;
  }

  set zipCode(value: number) {
    this._zipCode = value;
  }

}
