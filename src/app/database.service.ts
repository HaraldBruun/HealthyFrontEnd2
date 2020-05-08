import {Pupil} from './shared/user.model';
import {UsersService} from './shared/users.service';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Router} from "@angular/router";
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class DatabaseService {
  users: Pupil[];
  // baseUrl = 'http://35.246.214.109:8080';
  baseUrl = 'http://localhost:8080';
  private _loggedIn: boolean;

  constructor(private http: HttpClient, private usersService: UsersService, private router: Router) {
    console.log('Service created');
  }

  getAllUsers() {
    this.usersService.removeAllUsers();
    this.http.get(this.baseUrl + '/getallusers')
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
    this.http.post(this.baseUrl + '/createUser', user)
      .toPromise()
      .then((data: JSON) => {
        console.log(data);
      }).catch(this.handleError);
  }


  testAndroid(userID: string) {
    // const httpParams = new HttpParams().set('uid', userID);
    // const options = {params: httpParams};
    const user = 'rest@api.dk';
    const pass = '123123'

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

  // getUser(userID: string) {
  //   // const httpParams = new HttpParams().set('uid', userID);
  //   // const options = {params: httpParams};
  //   const user = 'rest@api.dk';
  //   const pass = '123123'
  //
  //   this.http.post(this.baseUrl + '/getuser', "TestUser123"
  //   )
  //     .toPromise()
  //     .then((data: boolean) => {
  //       this._loggedIn = data.valueOf();
  //       console.log(this._loggedIn);
  //     }).catch(this.handleError);
  // }

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
      user: user,
      pass: pass
    })
      .toPromise()
      .then((data: boolean) => {
        this._loggedIn = data.valueOf();
        console.log(this._loggedIn);
        data ? this.router.navigate(['/users']) : alert('Forkert login');
      }).catch(this.handleError);
  }

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


}
