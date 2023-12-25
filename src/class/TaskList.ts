import {Task} from "./Task.ts";
export interface ITaskList {
    list: Task[];
    
    addTask: (task: Task)=> Task[];
    getTaskById: (id: string)=> Task | null;
    getTaskByIndex: (index: number)=> Task | null;
    deleteTask: (id: string)=>void
}
export class TaskList implements ITaskList {
    list: Task[];
    constructor(tasks?: Task[]) {
        this.list = tasks || [];
    }
    
    addTask = (task: Task)=>{
        this.list.push(task);
        return this.list;
    }
    
    getTaskById = (id: string)=>{
        return this.list.find(item=> item.id === id) || null;
    }
    
    getTaskByIndex = (index: number)=>{
        return this.list[index] || null;
    }

    deleteTask = (id: string)=>{
        const taskIndex = this.list.findIndex((task) => task.id === id);
        if (taskIndex !== -1) {
            this.list.splice(taskIndex, 1);
        }
    }
}