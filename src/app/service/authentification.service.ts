import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor() { }

  authenticate(username, password) {
    if (username === 'adaher' && password === 'Doca') {

      sessionStorage.setItem('username', username);
      alert("login successfull");
      return true;
    } else {
      alert("login or password are wrong");
      return false;
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
