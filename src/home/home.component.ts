import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Kanban } from "src/shared/Kanban";
import { KanbanService } from "./home.service";

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls : ['./home.component.css']
})
export class HomeComponent {
    constructor(private kanbanService:KanbanService,
            private router:Router, private snack:MatSnackBar){}

    public kanban:Kanban=new Kanban();
    
    onSubmit():void{
        console.log("the button is clicked");
        this.kanbanService.postKanban(this.kanban).subscribe((response:any)=>{
            console.log(response)
            // alert("New kanban has been added");
            this.snack.open("New kanban has been added", "Ok",{
                duration:3000
              });
        });
        
        this.kanban.title='';
    }
    onNavigate():void{
        this.router.navigate(['/getAllKanbans']);
    }
}