import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import AuthService from 'src/app/core/services/auth-service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   registerForm: FormGroup;
   newUser;
  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z]*$')]],
      username: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[A-Za-z0-9]*$')]],
      email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]+@[a-z0-9]+.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]*$'), Validators.minLength(8) ]],
      phone: ['', [Validators.maxLength(10), Validators.pattern('^[0-9]*$')  ]],
    });
   }

  register() {
    this.service.getUsersData().subscribe(data => {
      this.newUser = {
        id: data.length + 1,
        name: this.registerForm.get('name').value,
        username: this.registerForm.get('username').value,
        email: this.registerForm.get('email').value,
        password: this.registerForm.get('password').value,
        phone: this.registerForm.get('phone').value,
      };
      data.push(this.newUser);
      this.service.sendUsers(data);
    });
  }

  getFullName(event: any) {
    this.registerForm.patchValue({
      name : event.target.value
    });
  }

  getUserName(event: any) {
    this.registerForm.patchValue({
      userName : event.target.value
    });
  }

  getEmail(event: any) {
    this.registerForm.patchValue({
      email : event.target.value
    });
  }

  getPassword(event: any) {
    this.registerForm.patchValue({
      password : event.target.value
    });
  }

  getPhoneNo(event: any) {
    this.registerForm.patchValue({
      phoneNumber : event.target.value
    });
  }

  navigateTo() {
    this.router.navigateByUrl('/login');
  }

  ngOnInit() { }

}
