import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit {

  loggedIn = false;
 constructor(private loginService: LoginService) {}
 ngOnInit() {
   this.loginService.checkSession().subscribe(
     res => {
       this.loggedIn = true;
     },
     error => {
       this.loggedIn = false;
     }
   );
 }

 logout() {
    this.loginService.logout().subscribe(
      res => {
        console.log('logoutttt');
        console.log(res);
       localStorage.removeItem('xAuthToken');
       localStorage.setItem('xAuthToken', '1234');
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

 }
