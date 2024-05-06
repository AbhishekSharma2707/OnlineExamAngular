import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { Admin, AdminService } from '../admin.service';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,MatFormFieldModule, MatInputModule,MatIconModule,MatButtonModule,FormsModule,CommonModule,MatSnackBarModule,MatCardModule,MatSelectModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{


  subjects:string[]=[];
  subject:string='';
  user:User=new User('','',0,'');
  admin:Admin=new Admin('','');
  message:string="";
  constructor(private userService:UserService,private router:Router,private questionService:QuestionService,private adminService:AdminService){

  }
  ngOnInit(): void 
  {
    this.questionService.getAllSubjects().subscribe(Array=>this.subjects=Array)
  }

  validate()
  {
    this.userService.validate(this.user).subscribe(response=>{
      if(response)
        {
          sessionStorage.setItem("message"," welcome " +" " +this.user.username);

          sessionStorage.setItem("subject",this.subject);
          sessionStorage.setItem("duration","81"); //60s=1min 3min

          this.router.navigateByUrl("question");
        }
        else{

          this.router.navigateByUrl("login");
        }
    });
  }
  
  validate2()
  {
    this.admin.username=this.user.username;
    this.admin.password=this.user.password;

      this.adminService.validate2(this.admin).subscribe(answer=>{if(answer)
      {
        this.router.navigate(['admindashboard']);
      }
    
      else
      {
        this.router.navigate(['login']);
        this.message="invalid credentials";
      }
    });
  }

}
