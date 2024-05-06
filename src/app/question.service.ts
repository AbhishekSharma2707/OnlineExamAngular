import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient:HttpClient) {

   }
   
   getFirstQuestion(subject:string){
   return this.httpClient.get<Question>("http://localhost:8080/getFirstQuestion/"+subject);
   }

   nextQuestion(){
    return this.httpClient.get<Question>("http://localhost:8080/nextQuestion");
    }

    previousQuestion(){
      return this.httpClient.get<Question>("http://localhost:8080/previousQuestion");
      }

      saveAnswer(answer:Answer){
        return this.httpClient.post<void>("http://localhost:8080/saveAnswer",answer)
      }

      calculateScore(){
        return this.httpClient.get<number>("http://localhost:8080/calculateScore")

        //[ 10 subscribe()] Observable object given by get
      }
      allAnswers(){
       return this.httpClient.get<Answer[]>("http://localhost:8080/allAnswers");
       //[[] Anser[] subscribe()] Observable object
      }

      getAllSubjects(){
        return this.httpClient.get<string[]>("http://localhost:8080/getAllSubjects");
      }

      getAllQno(subject:string){
        return this.httpClient.get<number[]>("http://localhost:8080/getAllQno/"+subject);
      }

      getQuestion(qno:number){
        return this.httpClient.get<Question>("http://localhost:8080/getQuestion/"+qno);
      
      }

      addQuestion(question:Question)
      {
        return this.httpClient.post<boolean>("http://localhost:8080/addQuestion" , question);
      }
    
      updateQuestion(question: Question) 
      {
        return this.httpClient.put<boolean>("http://localhost:8080/updateQuestion" , question);
      }
    
      viewQuestion(qno:number,subject:string)
      {
        return this.httpClient.get<Question>("http://localhost:8080/viewQuestion/"+qno+"/"+subject);
      }
    
      deleteQuestion(qno:number,subject:string)
      {
        return this.httpClient.delete<boolean>("http://localhost:8080/deleteQuestion/"+qno+"/"+subject);
      }
}


export class Question
{
  qno:number;
  subject:string;
  qtext:string;
  op1:string;
  op2:string;
  op3:string;
  op4:string;
  answer:string;

   constructor(qno:number,subject:string,qtext:string,op1:string,op2:string,op3:string,op4:string,answer:string)
   {
    this.qno=qno;
    this.answer=answer;
    this.op1=op1;
    this.op2=op2;
    this.op3=op3;
    this.op4=op4;
    this.answer=answer;
    this.subject=subject;
    this.qtext=qtext;
   }
   
}export class Answer
{
  qno:number;
  submittedAnswer:string;
  qtext:string;
  correctAnswer:string;
  
  constructor(qno:number,qtext:string,submittedAnswer:string,correctAnswer:string)
  {
      this.qno=qno;
      this.correctAnswer=correctAnswer;
      this.submittedAnswer=submittedAnswer;
      this.qtext=qtext;
  }
    
}




