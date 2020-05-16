import {Pupil} from './user.model';

export class SchoolModel {
  private _schoolName: string;
  private _schoolCity: string;
  private _pupils: [Pupil];

    constructor(schoolName: string, schoolCity: string, pupils: [Pupil]) {
    this._schoolName = schoolName;
    this._schoolCity = schoolCity;
    this._pupils = pupils;
  }
}
