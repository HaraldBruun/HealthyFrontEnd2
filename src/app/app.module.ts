import {StatisticsComponent} from './components/statistics/statistics.component';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FrameComponent} from './components/frame/frame.component';
import {DropdownComponent} from './components/frame/dropdown/dropdown.component';
import {LoginComponent} from './components/login/login.component';
import {UsersComponent} from './components/users/users.component';
import {UsersListComponent} from './components/users/users-list/users-list.component';
import {UsersItemComponent} from './components/users/users-list/users-item/users-item.component';
import {UsersDetailComponent} from './components/users/users-detail/users-detail.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {CreateUserComponent} from './components/users/create-user/create-user.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {UsersService} from './shared/users.service';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRouting} from './app.routing';
import {UsersEditComponent} from './components/users/users-edit/users-edit.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { RewardComponent } from './components/reward/reward.component';
import { CreaterewardComponent } from './components/reward/createreward/createreward.component';
import {CanDeactivateGuard} from './components/users/users-edit/can-deactivate-guard.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrameComponent,
    DropdownComponent,
    LoginComponent,
    UsersComponent,
    UsersListComponent,
    UsersItemComponent,
    UsersDetailComponent,
    StatisticsComponent,
    CreateUserComponent,
    UsersEditComponent,
    RewardComponent,
    CreaterewardComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxChartsModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRouting,
    MatToolbarModule,
    ScrollingModule,
    MatTreeModule,
    MatIconModule
  ],
  providers: [UsersService, CanDeactivateGuard],
  bootstrap: [AppComponent],
  entryComponents: [CreateUserComponent, CreaterewardComponent]
})
export class AppModule {

}
