import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpclient:HttpClient) { }

  validate2(admin:Admin):Observable<boolean>
  {
       return this.httpclient.post<boolean>("http://localhost:8080/validate2",admin);

       // [true]Observable object
  }

  getResults2(subject:string,pageno:number)
  {
    return this.httpclient.get<Result[]>("http://localhost:8080/getResults2/"+subject+"/"+pageno);
  }

  getRecordsCounts(subject:string)
  {
    return this.httpclient.get<number>("http://localhost:8080/getRecordsCounts/"+subject);
  }

}
export class Admin
{
  username:string;
  password:string;
 

  constructor(username:string,password:string)
  {
    this.username=username;
    this.password=password;
  
  }
}
export class Result
{
  username:string;
  subject:string;
  score:any;


  constructor(username:string, subject:string,score:number)
  {
    this.username=username;
    this.subject=subject;
    this.score=score;
  }

}


