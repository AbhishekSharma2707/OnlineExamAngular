import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) {

   }
   saveToDB(user:User){
    return this.httpclient.post("http://localhost:8080/saveToDB",user);
  }

  validate(user:User){
    return this.httpclient.post<boolean>("http://localhost:8080/validate",user);
    //[true] observable object
  }
}
export class User{
  
  username:string;
  password:string;
  mobno:number;
  emailid:string;

  constructor(username:string,  password:string, mobno:number,emailid:string){
    this.username=username;
    this.password=password;
    this.mobno=mobno;
    this.emailid=emailid;
  }
    
}