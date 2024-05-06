import { Component } from '@angular/core';
import { Answer, QuestionService } from '../question.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [FormsModule,CommonModule,MatTableModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {

  score:any=0;
  allAnswers:Answer[]=[];

  constructor(private questionService:QuestionService){
    questionService.calculateScore().subscribe(score=>this.score=score);

    questionService.allAnswers().subscribe(allAnswers=>this.allAnswers=allAnswers);
    //[10 subscribe()] observable object
  }
  compare(submittedAnswer:string,correctAnswer:string){
    if(submittedAnswer==correctAnswer){
      return "green"
    }
    else{
      return "red"
    }
  }
}
