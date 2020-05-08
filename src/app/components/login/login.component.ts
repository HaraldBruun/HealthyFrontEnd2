import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from "@angular/router";
import {DatabaseService} from "../../database.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private databaseService: DatabaseService) {
  }

  ngOnInit() {
    this.databaseService.postManTest();
  }

  clickOnLoginBtn(user: string, pass: string) {
    if (user == '' || pass == '') {
      alert('Indtast studienummer og kode');
      return;
    }
    this.databaseService.login(user, pass);
  }
}
