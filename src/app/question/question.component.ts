import { Component, OnInit } from '@angular/core';
import { Answer, Question, QuestionService } from '../question.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { User, UserService } from '../user.service';

import { Admin, AdminService } from '../admin.service';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-question',
  standalone: true,
  imports: [FormsModule,CommonModule,MatFormFieldModule, MatInputModule,MatIconModule,MatButtonModule,FormsModule,CommonModule,MatSnackBarModule,MatCardModule,MatSelectModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
  message:any='';
  subject:any='';
  question:Question=new Question(0,'','','','','','','');
  submittedAnswer:string='';
   answer:Answer=new Answer(0,'','','');
maxtime:any="";// for managing max time 10 seconds for each question
x:any="";// it will refer to interval used for above maxtime

   duration:any=81;
   durationMessage='';
   durationInterval:any='';
   selected:boolean=false;

   allAnswer:Answer[]=[];

   allQnos:number[]=[];

  constructor(private questionService:QuestionService,private router:Router){
    this.message=sessionStorage.getItem("message");
    this.subject=sessionStorage.getItem("subject");
    questionService.getFirstQuestion(this.subject).subscribe(question=>this.question=question);
     
     this.durationInterval =setInterval(()=>
      {
        this.duration=this.duration-1; //178
       var mintues=Math.floor( this.duration/60); //2
       var seconds=this.duration%60; //58

        this.durationMessage=mintues + ":" + seconds;

        if(this.duration==0){
          this.endexam();
        }
    },1000);//after 1 sec setInterval will execute given arrow function 
  }


  ngOnInit(): void 
  {
    this.decreaseTime();
    this.questionService.getAllQno(this.subject).subscribe(Array =>this.allQnos=Array);
  }

  decreaseTime()
  {

    this.maxtime=10;

    this.x=setInterval(()=>{
      
      this.maxtime--;

      console.log(this.maxtime);

      if(this.maxtime==0)
        this.nextQuestion();

    },1000);
  }

  nextQuestion(){
    clearInterval(this.x);//stop previous interval
    this.decreaseTime(); //Start new interval for new question
    this.selected=false;
    this.questionService.nextQuestion().subscribe(question=>this.question=question);
  }
   
  previousQuestion(){

    clearInterval(this.x);//stop previous interval
    this.decreaseTime(); //Start new interval for new question
    this.selected=false;

    this.questionService.allAnswers().subscribe(Array=>this.allAnswer=Array);
    this.questionService.previousQuestion().subscribe(question=>this.question=question);
  }

getColor(option:string)
{
for(var i=0;i<this.allAnswer.length;i++){
  let answer=this.allAnswer[i];
  if(answer.qno==this.question.qno && answer.submittedAnswer==option){
    return "green"
  }
}
return "red";

}

isChecked(option:string)
{
for(var i=0;i<this.allAnswer.length;i++){
  let answer=this.allAnswer[i];
  if(answer.qno==this.question.qno && answer.submittedAnswer==option){
    return true;
  }
}
return false;

}

  saveAnswer(){
    this.answer.submittedAnswer=this.submittedAnswer;
    this.answer.qno=this.question.qno;
    this.answer.qtext=this.question.qtext;
    this.answer.correctAnswer=this.question.answer;

    this.questionService.saveAnswer(this.answer).subscribe();
  }

  endexam(){
    clearInterval(this.durationInterval);
   this.router.navigateByUrl("score")
  }

  getQuestion(evenobject:any){

    let questionNumber=evenobject.target.value;//target will give source of event
    console.log("selected question number is "+ questionNumber);
    this.questionService.getQuestion(questionNumber).subscribe(question=>this.question=question);
  }
}
