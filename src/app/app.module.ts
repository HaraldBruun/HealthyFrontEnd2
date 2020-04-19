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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrameComponent,
    DropdownComponent,
    LoginComponent,
    DatabaseConnecterComponent,
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
