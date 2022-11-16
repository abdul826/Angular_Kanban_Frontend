import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  user = null;

  constructor(private router: Router, public login: LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();

    this.user = this.login.getUser();

    this.login.loginStatusSubject.asObservable().subscribe((data)=>{

      this.isLoggedIn = this.login.isLoggedIn();

      this.user = this.login.getUser();

    });
  }
  wel():void{
    this.router.navigate(['home']);
  }
  onContact(): void {
    this.router.navigate(['contact']);
  }
  onCreate(): void{
    this.router.navigate(['create']);
  }
  onAbout():void{
    this.router.navigate(['about']);
  }

  public logout(){
    this.login.logout();
    this.login.removeUser();
    this.isLoggedIn = false;
    this.user = null;

  this.login.loginStatusSubject.asObservable().subscribe((data)=>{
   this.isLoggedIn = false
   this.user = null
  });

  this.router.navigate(['signin']);
 // window.location.reload();
 }

}
