import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import {PupilModel} from '../../../shared/Pupil.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
// TODO: FIX THIS. Idéen er at oprette et array eller hvad fanden det er her i typescript med typen PupilModel,
//  og så foreach gennem alle når man indsætter i 'formen', btw age skal ikke være id, bare en test.
export class DropdownComponent implements OnInit {
  form: FormGroup;
  orders = [];
  //pupils = [PupilModel];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      orders: ['']
    });
    // this.orders = this.getPupils();
  }
  getPupils() {
    let pupil = new PupilModel('Anton', 1)
    return [
     { id: pupil.age, name: pupil.fullname },
    { id: '1', name: 'order 2' },
    { id: '3', name: 'order 3' },
    { id: '4', name: 'order 4' }
  ];
  }
  /*getPupils; pupils: [PupilModel](){
    const pupil1 = new PupilModel("hello", 1);
    const pupil2 = new PupilModel("din", 2);
    const pupil3 = new PupilModel("far", 3);
    return[this.pupil
      {id: pupil1.age, name: pupil1.fullname},
      {id: pupil2.age, name: pupil2.fullname},
      {id: pupil3.age, name: pupil3.fullname},
      ];
  }
   */
  submit(){
    console.log(this.form.value);
  }
  ngOnInit(): void {
  }

}
