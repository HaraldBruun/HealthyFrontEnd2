import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FrameComponent } from './components/frame/frame.component';
import { DropdownComponent } from './components/frame/dropdown/dropdown.component';
import { LoginComponent } from './components/login/login.component';
import { DatabaseConnecterComponent } from './database-connecter/database-connecter.component';
import { UsersComponent } from './components/users/users.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersItemComponent } from './components/users/users-list/users-item/users-item.component';


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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
