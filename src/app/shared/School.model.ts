import {PupilModel} from './Pupil.model';

export class SchoolModel {
  private _schoolName: string;
  private _schoolCity: string;
  private _pupils: [PupilModel];

    constructor(schoolName: string, schoolCity: string, pupils: [PupilModel]) {
    this._schoolName = schoolName;
    this._schoolCity = schoolCity;
    this._pupils = pupils;
  }
}
