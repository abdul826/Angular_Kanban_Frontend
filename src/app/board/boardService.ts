import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "src/shared/Task";

@Injectable({
    providedIn:'root'
})
export class BoardService{
    baseUrl:string="http://localhost:8080/tasks";
    constructor(private http:HttpClient){}
    postTask(task:Task):Observable<any>{
        console.log(task);
        return this.http.post<any>(`${this.baseUrl}/createtask`,task);
    }
    getTask(kanban_id:number):Observable<Task[]>{
        console.log(kanban_id);
        return this.http.get<Task[]>(`${this.baseUrl}/getByKanbanId/${kanban_id}`);
    }
    deleteTask(id:number){
        console.log(id);
        return this.http.delete(`${this.baseUrl}/deletebyid/${id}`);
    }
    putTask(task:Task):Observable<any>{
        console.log(task);
        return this.http.put<any>(`${this.baseUrl}/updatebyid/${task.id}`,task);
    }
}