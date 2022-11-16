import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//import { HomeComponent } from 'src/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
//import { KanbanList } from 'src/home/kanbanList.component';
import { HeaderComponent } from './header/header.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { SigninComponent } from './signin/signin.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from 'src/home/home.component';
import { KanbanList } from 'src/home/kanbanList.component';
import { BoardComponent } from './board/board.component';
import { AddBoardComponent } from './board/Add/add.component';
import { UpdateBoardComponent } from './board/Update/update.component';
import { FilterList } from 'src/home/filter.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { FooterComponent } from './footer/footer.component';
import { UpdateKanbanComponent } from 'src/home/UpdateKanban/updatekanban.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KanbanList,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    WelcomeComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    BoardComponent,
    AddBoardComponent,
    UpdateBoardComponent,
    FilterList,
    FooterComponent,
    UpdateKanbanComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxNavbarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    DragDropModule,
    CommonModule,
    MatTableModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
