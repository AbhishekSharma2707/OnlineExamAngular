import { Component } from '@angular/core';
import { AdminService, Result } from '../admin.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manageresult',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './manageresult.component.html',
  styleUrl: './manageresult.component.css'
})
export class ManageresultComponent {


  results:Result[]=[];
  subject:string="";
  pages:number[]=[];// it behaves like dynamic array(like list)
  no:number=0;

  
  
  constructor(private adminService:AdminService)
  {
   
  }

  showRecords()
  {
    this.adminService.getResults2(this.subject,1).subscribe(array=>{this.results=array; console.log("called")});
  
    this.pages.length=0;// for new subject , array must be empty

    console.log('subject is ' + this.subject);

    this.adminService.getRecordsCounts(this.subject).subscribe(noofrecords=>{
      
      let pageno=1;

      while(3*pageno<noofrecords)//10
      {
        this.pages.push(pageno);//[1,2,3]
        pageno=pageno+1;
        
      }

      this.pages.push(pageno);//[1,2,3,4]

      console.log("Total Pages " + pageno);

      
      
    });

    
  }

// 3 records
// 11 records


getResults2(pageno:number)
{
  
  this.adminService.getResults2(this.subject,pageno).subscribe(array=>this.results=array);
}


}
