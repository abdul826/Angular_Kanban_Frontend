import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Task } from "src/shared/Task";
import { TaskStatus } from "src/shared/TaskStatus";

import { BoardService } from "../boardService";

@Component({
    selector:'add-board',
    templateUrl:'./add.component.html'
})
export class AddBoardComponent{


    // constructor(){}

    kanban_Id:number=0;
    title:string='';
    description:string='';
    status:TaskStatus=TaskStatus.TODO;
    task:Task=new Task();
    constructor(private boardService:BoardService,private route:ActivatedRoute,private router:Router,private snack:MatSnackBar){
        this.route.params.subscribe(paramsId=>{
            this.kanban_Id=paramsId['id'];
        })
    }
    
    OnSubmit(){

        if(this.task.title == "" || this.task.title == null ){
                // alert("user is required!");
                this.snack.open("Title is required!", "Ok",{
                  duration:3000
                });
                return;
        }else if(this.task.description == "" || this.task.description == null){
            this.snack.open("Description is required!", "Ok",{
                duration:3000
              });
              return;
        }

        this.task.kanban_Id=this.kanban_Id;
        this.boardService.postTask(this.task).subscribe((response:any)=>{
            console.log(response);
        })
        this.router.navigate([`/getTasks/${this.kanban_Id}`]);
    }
    goBack(){
        this.router.navigate([`/getTasks/${this.kanban_Id}`]);
    }
}