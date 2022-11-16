import { Component } from '@angular/core';
import { KanbanService } from 'src/home/home.service';
//import { KanbanService } from 'src/home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[KanbanService]
})
export class AppComponent {
  title = 'kanban';
}
