import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Task } from "src/shared/Task";
import { TaskStatus } from "src/shared/TaskStatus";

import { BoardService } from "../boardService";

@Component({
    selector:'update-board',
    templateUrl:'./update.component.html'
})
export class UpdateBoardComponent implements OnInit{
    _id:number=0;
    kanban_id:number=0;
    title:string='';
    description:string='';
    task:Task=new Task();
    constructor(private boardService:BoardService,private route:ActivatedRoute,private router:Router){
        this.route.params.subscribe(paramsId=>{
            this._id=paramsId['id'];
            this.title=paramsId['title'];
            this.description=paramsId['description'];
            this.kanban_id=paramsId['kanban_id'];
        })
    }
    ngOnInit(): void {
        this.task.id=this._id;
        this.task.kanban_Id=this.kanban_id;
        this.task.description=this.description;
        this.task.title=this.title;
    }
    OnSubmit(){
        this.boardService.putTask(this.task).subscribe((response:any)=>{
            console.log(response);
        })
        this.router.navigate([`/getTasks/${this.kanban_id}`]);
    }
    goBack(){
        this.router.navigate([`/getTasks/${this.kanban_id}`]);
    }
}