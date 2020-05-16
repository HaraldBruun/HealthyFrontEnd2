import {PhysiqueModel} from './shared/physique.model';
import {PersonalinfoModel} from './shared/personalinfo.model';
import {ExperienceModel} from './shared/experience.model';
import {MealModel} from './shared/food.model';
import {RewardModel} from './shared/reward.model';
import {Pupil} from './shared/user.model';
import {UsersService} from './shared/users.service';
import {dashCaseToCamelCase, newArray} from '@angular/compiler/src/util';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Data, Router} from '@angular/router';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {LoginResponse} from './shared/loginresponse';
import {throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DatabaseService {
  users: Pupil[];
  baseUrl = 'http://35.246.214.109:8080';
  //baseUrl = 'http://localhost:8080';
  private _loginResponse: LoginResponse;
  private _loggedIn: boolean;

  constructor(private http: HttpClient, private usersService: UsersService, private router: Router) {
    console.log('Service created');
  }

  getAllUsers() {
    const tokenString = 'Bearer ' + this._loginResponse.token.toString();
    const options = {
      headers: new HttpHeaders({
        Authorization: tokenString
      })
    };
    this.usersService.removeAllUsers();
    this.http.get(this.baseUrl + '/getallusers', options)
      .toPromise()
      .then(
        (data: Pupil[]) => {
          console.log(data);
          this.users = data;
          this.usersService.addUsers(this.users);
        }
      ).catch(this.handleError);
  }

  saveUser(user: Pupil) {
    this.http.put(this.baseUrl + '/saveuser', user)
      .toPromise()
      .then((data: JSON) => {
        console.log(data);
      }).catch(this.handleError);
  }

  createUser(user: Pupil) {
    this.http.post(this.baseUrl + '/createuser', user)
      .toPromise()
      .then((data: JSON) => {
        console.log(data);
      }).catch(this.handleError);
  }


  testAndroid(userID: string) {
    // const httpParams = new HttpParams().set('uid', userID);
    // const options = {params: httpParams};
    const user = 'rest@api.dk';
    const pass = '123123';

    this.http.post(this.baseUrl + '/androidlogin', {
      user: user,
      pass: pass
    })
      .toPromise()
      .then((data: boolean) => {
        this._loggedIn = data.valueOf();
        console.log(this._loggedIn);
      }).catch(this.handleError);
  }

  getUser(userID: string) {
    const httpParams = new HttpParams().set('uid', userID);
    const options = {params: httpParams};
    // const user = 'rest@api.dk';
    // const pass = '123123'

    this.http.get(this.baseUrl + '/getuser', options
    )
      .toPromise()
      .then((data: Pupil) => {
        console.log(data);
      }).catch(this.handleError);
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
      ).catch(this.handleError);
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
      }).catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}`);
      switch (error.status) {
        case 400:
          alert('Bad Request');
          break;
        case 401:
          alert('Forkert login');
          break;
        case 500:
          alert('Internal Server Error');
          break;
      }
    }
    return throwError(
      'An error has happened; please try again later.');
  }

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

