import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop'; 
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    DragDropModule,
    MatExpansionModule
  ],
  exports:[BoardComponent]
})
export class BoardModule { }
