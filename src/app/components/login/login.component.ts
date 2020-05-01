import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() eventEmitterLogin = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  clickOnLoginBtn(user: string, pass: string) {
    if (user == '' || pass == '') {
      alert('Indtast studienummer og kode');
      return;
    }
    this.http.post('http://35.246.214.109:8080/login', {
      user: user,
      pass: pass
    })
      .toPromise()
      .then((data: boolean) => {
        //console.log(data.valueOf())
        // this.loggedIn = data.valueOf();
        console.log(data.valueOf())
        data ? this.eventEmitterLogin.emit(data) : alert('Forkert login');
      });
  }
}
