import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from 'src/home/home.component';
//import { KanbanList } from 'src/home/kanbanList.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { KanbanList } from 'src/home/kanbanList.component';
import { HomeComponent } from 'src/home/home.component';
import { BoardComponent } from './board/board.component';
import { UpdateBoardComponent } from './board/Update/update.component';
import { AddBoardComponent } from './board/Add/add.component';
import { UpdateKanbanComponent } from 'src/home/UpdateKanban/updatekanban.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'getAllKanbans',component:KanbanList},
  {path:'updateKanban/:id/:title',component:UpdateKanbanComponent},
  // {path:'home', component:WelcomeComponent},
  {path:'home',component:WelcomeComponent, canActivate:[NormalGuard]},
  {path:'create',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'',component:WelcomeComponent},
  {path:'about',component:AboutComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'admin',component:DashboardComponent, canActivate:[AdminGuard]},
  {path:'getTasks/:id',component:BoardComponent},
  {path:'addTask/:id',component:AddBoardComponent},
  {path:'updateTask/:id/:title/:description/:kanban_id',component:UpdateBoardComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
