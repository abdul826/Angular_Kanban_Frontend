import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  // get Current User
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current_user`);
  }

  // generate token

  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`, loginData)
  }

  // Login User: set token in local storage
  public loginUser(token:any){
    localStorage.setItem("token", token);
    return true;
  }

  // isLogin : user is login or not
  public isLoggedIn(){
    let tokenStr = localStorage.getItem("token");

    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  // logout: Remove token from local storage

  public logout(){
    return localStorage.removeItem('token');
    
  }

  // Get Token
  public getToken(){
    return localStorage.getItem('token');
  }

  // Set user Details
  public setUser(user:any){
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Get Uer
  public getUser(){
    let userStr = localStorage.getItem('user');

    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  // Remove User from local storage
  public removeUser(){
    return localStorage.removeItem('user');
  }


  // get user Role
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

}
