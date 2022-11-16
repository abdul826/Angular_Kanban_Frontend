import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private snack:MatSnackBar) { }

  public user={
    username:"",
    password:"",
    firstname:"",
    lastname:"",
    email:""
  }

  isSuccessful = false;
  isSignUpFailed = false;
  erroMessage = "";

  ngOnInit(): void {
  }
    

    formSubmit(){
      if(this.user.username == "" || this.user.username == null){
        // alert("user is required!");
        this.snack.open("username is required!", "Ok",{
          duration:3000
        });
        return;
      }else if(this.user.firstname == "" || this.user.firstname == null){
        // alert("user is required!");
        this.snack.open("Required Field!", "Ok",{
          duration:3000
        });
        return;
      }else if(this.user.lastname == "" || this.user.lastname == null){
        // alert("user is required!");
        this.snack.open("Required Field!", "Ok",{
          duration:3000
        });
        return;
      }else if(this.user.email == "" || this.user.email == null){
        // alert("user is required!");
        this.snack.open("Required Field!", "Ok",{
          duration:3000
        });
        return;
      }else if(this.user.password == "" || this.user.password == null){
        // alert("user is required!");
        this.snack.open("Required Field!", "Ok",{
          duration:3000
        });
        return;
      }
  
      // addUser: userService
  
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        // success
        console.log(data);
        this.isSuccessful = true;
      this.isSignUpFailed = false;
        this.snack.open("Registraton done Successfully ",'',{
          duration:3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        })
      },
      (error)=>{
        // error
        console.log(error);
        this.erroMessage = error.message;
        this.isSignUpFailed = true;
        // this.snack.open("Username Already Exist",'',{
        //   duration:3000,
        //   verticalPosition: 'top',
        //   horizontalPosition: 'right'
        // })
      }
    )
  
    }
  

}
