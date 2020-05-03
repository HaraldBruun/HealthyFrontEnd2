import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FrameComponent} from './components/frame/frame.component';
import {DropdownComponent} from './components/frame/dropdown/dropdown.component';
import {LoginComponent} from './components/login/login.component';
import {DatabaseConnecterComponent} from './database-connecter/database-connecter.component';
import {UsersComponent} from './components/users/users.component';
import {UsersListComponent} from './components/users/users-list/users-list.component';
import {UsersItemComponent} from './components/users/users-list/users-item/users-item.component';
import {UsersDetailComponent} from './components/users/users-detail/users-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {PopUpComponent} from './components/users/users-detail/pop-up/pop-up.component';
import {UsersService} from './components/users/users.service';
import {CreateUserComponent} from './components/users/create-user/create-user.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrameComponent,
    DropdownComponent,
    LoginComponent,
    DatabaseConnecterComponent,
    UsersComponent,
    UsersListComponent,
    UsersItemComponent,
    UsersDetailComponent,
    PopUpComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
  entryComponents: [CreateUserComponent]
})
export class AppModule {
}
