import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


import { Task } from 'src/shared/Task';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from './boardService';
import { TaskStatus } from 'src/shared/TaskStatus';

@Component({
  selector: 'app-board',
  templateUrl: './board1.component.html',
  styleUrls: ['./board.component.scss'],
  providers:[BoardService]
})
export class BoardComponent implements OnInit {
  //@Input() kanban_id:number=0;
  kanban_id:any;
  todostatus:TaskStatus=TaskStatus.TODO;
  inprogressstatus:TaskStatus=TaskStatus.INPROGRESS;
  donestatus:TaskStatus=TaskStatus.DONE;
  teststatus:TaskStatus=TaskStatus.INTEST;
  backlogstatus:TaskStatus=TaskStatus.BACKLOG;
  peerreviewstatus:TaskStatus=TaskStatus.PEERREVIEW;
  todo1:Task[]=[];
  done1:Task[]=[];
  progress1:Task[]=[];
  test1:Task[]=[];
  backlog1:Task[]=[];
  peerreview1:Task[]=[];
  previousContainerRef:Task[]=[];
  currentContainerRef:Task[]=[];
  statusTemp:TaskStatus=TaskStatus.TODO;
  /*heading1:string="ToDo";
  heading2:string="Inprogress";
  heading3:string="Done";*/

  constructor(private boardService:BoardService,private route:ActivatedRoute,private router:Router) {
    this.route.params.subscribe(paramsId=>
      {
        console.log(paramsId);
        this.kanban_id=paramsId['id'];
      });
   }
  task:Task[]=[];
  ngOnInit(): void {
    console.log(this.kanban_id);
    this.boardService.getTask(this.kanban_id).subscribe((response:any)=>{
      this.task=response;
      this.segregate(this.task);
    })
  }
  OnDelete(id:number){
    console.log(id);
    this.boardService.deleteTask(id).subscribe(()=>{
      //console.log(data);
    })
    window.location.reload();
  }
  OnAdd(){
    this.router.navigate([`/addTask/${this.kanban_id}`]);
  }
  OnUpdate(id:number,title:string,description:string){
    this.router.navigate([`/updateTask/${id}/${title}/${description}/${this.kanban_id}`]);
  }
  segregate(task:Task[]){
    /*for(var value of task){
      this.temp.push(value.description);
    }
    for(var value of task){
      this.temp1.push(value.title);
    }*/
    for(var value of task){
      if(value.status==TaskStatus.TODO){
        this.todo1.push(value);
        //console.log(value.description);
      }
      else if(value.status==TaskStatus.INPROGRESS){
        this.progress1.push(value);
      }
      else if(value.status==TaskStatus.DONE){
        this.done1.push(value);
      }
      else if(value.status==TaskStatus.BACKLOG){
        this.backlog1.push(value);
      }
      else if(value.status==TaskStatus.INTEST){
        this.test1.push(value);
      }
      else if(value.status==TaskStatus.PEERREVIEW){
        this.peerreview1.push(value);
      }
    }

    
  }
  // todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  // done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  // progress=['testing'];

  drop(event: CdkDragDrop<Task[]>,temp2:TaskStatus) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(event.previousContainer.data);
      console.log(event.container.data);
      this.currentContainerRef=event.container.data;
      //for(var val of this.currentContainerRef){
        //this.statusTemp=val.status;
      //}
      for(var val of event.container.data){
        val.status=temp2;
        this.boardService.putTask(val).subscribe(response=>{
          console.log(response);
        })
      }
    }
  }
  data=[this.todo1,this.test1,this.progress1,this.done1,this.backlog1,this.peerreview1];
  /*temp:string[]=[];
  temp1:string[]=[];
  data=[this.temp,this.temp1];*/
  goBack(){
    this.router.navigate([`/getAllKanbans/`]);
}
}
