import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService} from '../service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  username = '';
  password = '';
  invalidLogin = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private loginservice: AuthenticationService ) {}

  checkLogin() {
  if (this.loginservice.authenticate(this.username, this.password) ) {
    this.router.navigate(['HomePage']);
    this.invalidLogin = false;
  } else {
    this.invalidLogin = true;
  }
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }


}
