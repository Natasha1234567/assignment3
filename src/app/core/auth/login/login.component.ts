import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import AuthService from '../../services/auth-service/auth-service.service';
import { Subscription, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isDisabled = false;
  id = -1;
  users: any;
  usersSubscription: Subscription;
  showDetails: boolean;
  userData: any;
  constructor(private fb: FormBuilder, private router: Router, private service: AuthService, private zone: NgZone) {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required,
          Validators.pattern('^[A-Za-z0-9]+@[A-Za-z0-9]+.[a-z]{2,4}$')],
          // custom async validator
          this.service.userValidator()
        ],
      }, { updateOn: 'blur'});
   }

   /* check whether users data exists in the subject or not, If not, then call the api */
  ngOnInit() {
    this.service.getUsersData().subscribe(data => {
      data.length === 0 ? this.sendNewData() : this.service.sendUsers(data);
    });
  }

  getEmail(event: any) {
    this.getUserId();
    this.loginForm.patchValue({
      email : event.target.value
    });
  }

  getUserId() {
    this.usersSubscription = this.service.getUsersData().subscribe(data => {
      this.users = data;
      const index = this.users.findIndex ( x => x.email === this.loginForm.get('email').value);
      this.id = index > -1 ? this.users[index].id : -1;
      this.userData = this.users[index];
      this.service.setUserId(this.id);
    });
  }

  login() {
    this.showDetails = this.isDisabled ? false : true;
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

  sendNewData() {
    this.service.getUsers().pipe(catchError(err => of('Oops! you made a bad request'))).subscribe(users => {
       this.service.sendUsers(users);
    });
  }

  navigateTo() {
    this.router.navigateByUrl('/register');
  }

}
