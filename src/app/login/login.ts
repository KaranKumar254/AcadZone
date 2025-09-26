import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  activeForm: 'register' | 'login' = 'register';
  registerObj: registerModel = new registerModel();
  loginObj: loginModel = new loginModel();

  constructor(private snackbar: MatSnackBar, private router: Router) { }

  toggleForm(form: 'register' | 'login') {
    this.activeForm = form;
  }

  registerForm() {
    const localusers = localStorage.getItem('users');
    if (localusers != null) {
      const users = JSON.parse(localusers);
      users.push(this.registerObj);
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      const users = [];
      users.push(this.registerObj);
      localStorage.setItem('users', JSON.stringify(users));
    }
    this.snackbar.open('User registered successfully', 'close');
  }

  loginForm() {
  const localusers = localStorage.getItem('users');
  if (localusers != null) {
    const users = JSON.parse(localusers);
    const isUserExist = users.find(
      (user: registerModel) =>
        user.email == this.loginObj.email &&
        user.password == this.loginObj.password &&
        user.role == this.loginObj.role
    );

    if (isUserExist != undefined) {
      this.snackbar.open('Login Successfully', 'Close');

      // Save user details and username
      localStorage.setItem('loggedUser', JSON.stringify(isUserExist));
      localStorage.setItem('username', isUserExist.name);

      if (isUserExist.role === 'student') {
        this.router.navigateByUrl('/student');
      } else if (isUserExist.role === 'teacher') {
        this.router.navigateByUrl('/teacher');
      } else if (isUserExist.role === 'admin') {
        this.router.navigateByUrl('/admin');
      }
    } else {
      this.snackbar.open('Email, Password or Role is incorrect', 'Close');
    }
  }
}

}

export class registerModel {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'teacher' | 'admin';
  constructor() {
    this.name = "";
    this.email = "";
    this.password = "";
    this.role = "student";
  }
}

export class loginModel {
  email: string;
  password: string;
  role: 'student' | 'teacher' | 'admin';
  constructor() {
    this.email = "";
    this.password = "";
    this.role = "student";
  }
}
