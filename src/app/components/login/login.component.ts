import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() eventEmitterLogin = new EventEmitter<boolean>();
  loggedIn = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  clickOnLoginBtn(user: string, pass: string) {
    if (user == '' || pass == '') {
      alert('Indtast studienummer og kode');
      this.loggedIn = false;
      return;
    }
    this.http.post('http://35.246.214.109:8080/login', {
      user: user,
      pass: pass
    })
      .toPromise()
      .then((data: boolean) => {
        //console.log(data.valueOf())
        this.loggedIn = data.valueOf();
        console.log(this.loggedIn)
        data ? this.eventEmitterLogin.emit(data) : alert('Forkert login');
      });
  }
}
