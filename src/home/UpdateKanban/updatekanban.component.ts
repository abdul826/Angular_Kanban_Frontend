import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { WholeKanban } from "src/shared/WholeKanban";
import { KanbanService } from "../home.service";

@Component({
    selector:'app-updatekanban',
    templateUrl:'./updatekanban.component.html',
    
})
export class UpdateKanbanComponent implements OnInit{
    kanban:WholeKanban=new WholeKanban();
    constructor(private kanbanService:KanbanService,private route:ActivatedRoute,private router:Router){
        this.route.params.subscribe(paramsId=>{
            this.kanban.id=paramsId['id'];
            this.kanban.title=paramsId['title'];
        })
    }
    ngOnInit(): void {
        
    }
    OnSubmit(){
        this.kanbanService.updateBy(this.kanban).subscribe((response:any)=>{
            console.log(response);    
            })
            this.router.navigate(['/getAllKanbans']);
    }
    goBack(){
        this.router.navigate(['/getAllKanbans']);
    }
}