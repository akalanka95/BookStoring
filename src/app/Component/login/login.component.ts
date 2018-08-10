import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credential = {'username': '' , 'password' : ''};
  isloggedIn = false;

  constructor(private loginService: LoginService) { }

  onSubmit() {
    console.log('Getting done ');
    console.log(this.credential.username );
    console.log(this.credential.password );
    this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
      res => {
        console.log(res);
        /*localStorage.setItem('xAuthToken');*/
        this.isloggedIn = true;
        /*location.reload();*/
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
