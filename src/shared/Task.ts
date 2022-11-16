import { TaskStatus } from "./TaskStatus";

export class Task{
    id:number=0;
    title:string='';
    description:string='';
    status:TaskStatus=TaskStatus.TODO;
    kanban_Id:number=0;
}