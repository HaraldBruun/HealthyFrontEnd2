import {NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [MatAutocompleteModule, MatInputModule, MatDialogModule],
  exports: [MatAutocompleteModule, MatInputModule, MatDialogModule]
})

export class AngularMaterialModule {
}
