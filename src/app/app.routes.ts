import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { QuestionmanagementComponent } from './questionmanagement/questionmanagement.component';
import { ManageresultComponent } from './manageresult/manageresult.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [

    {path:'',component:HomepageComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'question',component:QuestionComponent},
    {path:'score',component:ScoreComponent},
    {path:'admindashboard',component:AdmindashboardComponent},
    {path:'questionmanagement',component:QuestionmanagementComponent},
    {path:'manageresult',component:ManageresultComponent},

];
