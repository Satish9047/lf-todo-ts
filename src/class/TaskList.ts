import {Task} from "./Task.ts";
export interface ITaskList {
    list: Task[];
    
    addTask: (task: Task)=> Task[];
    getTaskById: (id: string)=> Task | null;
    getTaskByIndex: (index: number)=> Task | null;
}
export class ClassList implements ITaskList {
    list: Task[];
    constructor(tasks?: Task[]) {
        this.list = tasks || [];
    }
    
    addTask = (task: Task)=>{
        this.list.push(task);
        return this.list
    }
    
    getTaskById = (id: string)=>{
        return this.list.find(item=> item.id === id) || null;
    }
    
    getTaskByIndex = (index: number)=>{
        return this.list[index] || null
    }
}