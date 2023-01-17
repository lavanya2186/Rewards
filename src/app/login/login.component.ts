import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  password = '';
  isInvalidCredentialsProvided = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginToApp(): void {
    if(this.userName === 'admin' && this.password === 'Admin@123') {
      this.router.navigate(['summary']);
    } else {
      this.isInvalidCredentialsProvided = true;
    }
  }

}
