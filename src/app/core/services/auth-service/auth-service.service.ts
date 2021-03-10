import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, timer, BehaviorSubject, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from './../../../shared/models/user.model';
import { Constants } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export default class AuthService {
  allUsers: User[];
  private users = new BehaviorSubject<User[]>([]);
  private userId;
  userIndex: number;
  authToken = 'SECRET';
  constructor(private http: HttpClient) { }

  /* Get all users*/
  getUsers(): Observable<any> {
    return timer(1000)
    .pipe(
      switchMap(() => {
        return this.http.get<any>(Constants.KEYS.apiUrl + Constants.KEYS.users);
      })
    );
  }

  /* search User and check whether emailExists or not */
  searchUser(): Observable<User> {
    if (this.userId > -1) {
      const index = this.users.value.findIndex( x => x.id === this.userId);
      if (index > -1 && this.users.value[index].website !== null || this.users.value[index].website !== undefined) {
        return of(this.users.value[index]);
    } else {
    return timer(1000)
    .pipe(
      switchMap(() => {
        return this.http.get<any>(Constants.KEYS.apiUrl + Constants.KEYS.users + '/' + this.userId);
      })
    );
    }
    } else {
      return of(null);
    }
  }

  /* user validator */
  userValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.searchUser()
        .pipe(
          map(res => {
            console.log('Async Validator', res);
            return res ? {} : { emailExists: true};
          })
        );
    };
}

/* save users data in the Behaiour subject*/
sendUsers(data) {
  if (this.users.value.length < data.length) {
    this.users.next(data);
  }
}

/* get Users data from the Subject*/
getUsersData(): Observable<any> {
  return this.users.asObservable();
}

/* set User Id */
setUserId(id: number) {
  this.userId = id;
}

getUserId() {
  return this.userId;
}

getAuthToken() {
  return this.authToken;
}

}
