import {getRandomID} from "../utils/utils.ts";

interface ITask {
    id: string;
    taskName: string;
    isCompleted: Boolean;
    
    setTask: (taskName: string) => void;
    getTask: ()=> string;
    
    setCompleted: (isCompleted: boolean)=>void;
    getCompleted: ()=>boolean;
    
    toggleCompleted: ()=> void;
}

export class Task implements ITask {
    id: string;
    taskName: string;
    isCompleted: boolean;
    
    constructor(taskName="", isCompleted=false) {
        this.id = getRandomID();
        this.taskName = taskName;
        this.isCompleted = isCompleted;
    }
    
    setTask = (taskName: string)=>{
        this.taskName = taskName;
    }
    
    getTask = ()=>{
        return this.taskName;
    }
    
    setCompleted = (isCompleted: boolean)=>{
        this.isCompleted = isCompleted;
    }
    
    getCompleted = ()=>{
        return this.isCompleted;
    }
    
    toggleCompleted = ()=>{
        this.isCompleted = !this.isCompleted;
    }
}