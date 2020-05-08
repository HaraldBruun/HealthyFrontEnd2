import {PhysiqueModel} from './shared/physique.model';
import {PersonalinfoModel} from './shared/personalinfo.model';
import {ExperienceModel} from './shared/experience.model';
import {MealModel} from './shared/food.model';
import {RewardModel} from './shared/reward.model';
import {Pupil} from './shared/user.model';
import {UsersService} from './shared/users.service';
import {newArray} from '@angular/compiler/src/util';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {LoginResponse} from './shared/loginresponse';


@Injectable({providedIn: 'root'})
export class DatabaseService {
  users: Pupil[];
  // baseUrl = 'http://35.246.214.109:8080';
  baseUrl = 'http://localhost:8080';
  private _loginResponse: LoginResponse;
  private _loggedIn: boolean;

  constructor(private http: HttpClient, private usersService: UsersService, private router: Router) {
    console.log('Service created');
  }

  public getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this._loginResponse.token}`,
      'Access-Control-Allow-Origin': '*'
    });
    return headers;
  }

  getAllUsers() {
    this.usersService.removeAllUsers();
    this.http.get(this.baseUrl + '/getallusers')
      .toPromise()
      .then(
        (data: Pupil[]) => {
          console.log(data);
          // console.log(data.slice(0, 1));
          this.users = data;
          // console.log(this.users.slice(0, 1));
          this.usersService.addUsers(this.users);
        }
      );
  }

  // postManTest() {
  //   this.http.get(this.baseUrl + '/postmantest', {headers:this.getHeaders()})
  //     .toPromise()
  //     .then(
  //       (data: string) => {
  //         console.log(data);
  //       }
  //     );
  // }
  // HVOIRFOR FUCK VIRKER DET HER IKKE
  postManTest() {
    this.http.get(this.baseUrl + '/postmantest', {headers: new HttpHeaders({Authorization: '123'})})
      .toPromise()
      .then(
        (data: string) => {
          console.log(data);
        }
      );
  }


  saveUser(user: Pupil) {
    this.http.put(this.baseUrl + '/saveuser', user)
      .toPromise()
      .then((data: JSON) => {
        console.log(data);
      });
  }

  createUser(user: Pupil) {
    this.http.post(this.baseUrl + '/createUser', user)
      .toPromise()
      .then((data: JSON) => {
        console.log(data);
      });
  }


  getUser(userID: string) {
    this.http.get(this.baseUrl + '/getuser')
      .toPromise()
      .then(
        (data: string) => {
          console.log(data);
        }
      );
  }

  deleteUser(userID: string) {
    const httpParams = new HttpParams().set('uid', userID);
    const options = {params: httpParams};
    // const options = this.makeOption(userID);
    // console.log(options);
    this.http.delete(this.baseUrl + '/deleteuser', options)
      .toPromise()
      .then(
        (data: boolean) => {
          console.log(data);
        }
      );
    console.log('Deleting ' + userID);
  }

  login(user: string, pass: string) {
    this.http.post(this.baseUrl + '/login', {
      username: user,
      password: pass
    })
      .toPromise()
      .then((loginResponse: LoginResponse) => {
        console.log(loginResponse);
        this._loginResponse = loginResponse;
        this._loggedIn = this._loginResponse.allowed;
        console.log(this._loggedIn);
        this._loggedIn ? this.router.navigate(['/users']) : alert('Forkert login');
      });
  }

  //       this._loggedIn = data.valueOf();
  //       console.log(this._loggedIn);
  //       data ? this.router.navigate(['/users']) : alert('Forkert login');
  //     });
  // }


  get loggedIn(): boolean {
    return this._loggedIn;
  }

  get loginResponse(): LoginResponse {
    return this._loginResponse;
  }

  set loginResponse(value: LoginResponse) {
    this._loginResponse = value;
  }
}

