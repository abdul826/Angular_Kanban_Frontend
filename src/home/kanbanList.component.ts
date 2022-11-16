import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { Kanban } from "src/shared/Kanban";
import { WholeKanban } from "src/shared/WholeKanban";
import { KanbanService } from "./home.service";

@Component({
    selector:'app-kanbanList',
    templateUrl:'./kanbanList.component.html',
    styleUrls: ['./kanbanlist.component.css']
})
export class KanbanList implements OnInit{

    allKanbans:WholeKanban[]=[];
    filtKanban:Kanban[] = [];

    kanbanFilter: string=''; 
    
    sub!:Subscription;

    get listFilter() : string {
        return this.kanbanFilter;
    }
    
    set listFilter(v : string) {
        this.kanbanFilter = v;
        console.log("setter is :",v);
        this.performFilter(v);
    }
    constructor(
        private kanbanService:KanbanService,
        private router:Router){}

    public kanban:Kanban = new Kanban();

    
    ngOnInit(): void {
        
            this.kanbanService.getAllKanban()
            .subscribe((data)=>{
                this.filtKanban=data;
                //this.allKanbans=data;
                //this.filtKanban=this.allKanbans;
                //this.filter();
                this.performFilter;
            });
            
    }

    
    filter(){
        var filt = this.kanbanFilter;
        console.log(filt);
        this.kanbanService.getBy(filt).
        subscribe((data)=>{
            this.filtKanban=data;
        });
        console.log(this.filtKanban);
    }

    goBack():void{
        this.router.navigate(['']);
    }

    performFilter(value: string) :void{
        this.kanbanService.getBy(value).subscribe((data)=>{
            this.allKanbans=data;
        }
        )
    }
    onNavigate(id:number):void{
        this.router.navigate([`/getTasks/${id}`]);
    }
    OnUpdate(id:number,title:string){
        this.router.navigate([`/updateKanban/${id}/${title}`]);
        
    }
    OnDelete(id:number){
        console.log(id);
        this.kanbanService.deleteKanban(id).subscribe(()=>{
          //console.log(data);
        })
        window.location.reload();
      }
}