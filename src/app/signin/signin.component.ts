import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private snack:MatSnackBar, private login:LoginService, private router:Router) { }

  public loginData={
    username:'',
    password:''
  }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("login form sumbit");
    
    if(this.loginData.username.trim() == '' || this.loginData.username == null){
      this.snack.open("Username Required","",{
        duration:3000
      });
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password == null){
      this.snack.open("Password Required","",{
        duration:3000
      });
      return;
    }

    // Request to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log('success');
        console.log(data);

        // login
        this.login.loginUser(data.token);

        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);

            // Redirect....... ADMIN DASH-BOARD or User Dashboard

            if(this.login.getUserRole() == "Admin"){
              // Admin Dashboard
              this.router.navigate(['admin']);
              this.login.loginStatusSubject.next(true);
            }else if(this.login.getUserRole() == "Normal"){
              // Normal User Dashboard
              this.router.navigate(['home']);
              this.login.loginStatusSubject.next(true);
            }else{
              this.login.logout();
            }
          },
          (error)=>{
            console.log(error);
            
          }
        )
        
      },
      (error)=>{
        console.log('Error !');
        console.log(error);
        this.snack.open("Invalid Details ! Try Again", "",{
          duration:3000
        });
        
      }
    )
  }
}
