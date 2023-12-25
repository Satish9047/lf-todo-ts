import 'normalize.css';

//importing classes
import {Task} from "./class/Task.ts";
import {TaskList} from "./class/TaskList.ts";

//refrencing the html elements in an variable
const addTask = document.getElementById("task-input") as HTMLInputElement;
const searchTask = document.getElementById("search-task") as HTMLInputElement;
const taskListElement = document.getElementById("task-list") as HTMLInputElement;

//creating the instance of TaskList Class
const taskList = new TaskList();


//function for creating task
function createTask (taskName: string):Task{
    const task = new Task(taskName);
    taskList.addTask(task)
    return task;
}

//function for toggling completed task
function toggleCompletedTask (id: string): Task{
    const task = taskList.getTaskById(id);
    if(!task){
        throw Error(`Task not found, task id: ${id}`);
    } else{
        task.toggleCompleted();
    }
    return task
}

//function for searching task
function searchTaskItem (list: TaskList, searchText: string ="" ): TaskList{
    const tasks = list.list.filter((item) =>{
        return item.taskName.toLowerCase().includes(searchText.toLowerCase());
    } )
    return new TaskList(tasks)
}

//function for rendering task List
function renderTaskList(tasks: TaskList){
    if(!taskListElement) throw new Error("Can't find DOM Element");

    taskListElement.innerHTML = "";
    tasks.list.forEach((task)=>{
        //creating the li html element
        const element = document.createElement("li");

        //creating the checkbox input
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox"

        //adding event listiner to the checkbox
        checkBox.addEventListener("change", ()=>{
            toggleCompletedTask(task.id);
            renderTaskList(taskList);
        })

        // Creating a label for the checkbox
        const label = document.createElement("label");
        label.appendChild(checkBox);
        label.appendChild(document.createTextNode(task.taskName));

        element.appendChild(label);
        taskListElement.appendChild(element);
    })
}

createTask('Learn JavaScript');
createTask('Read a book');
createTask('Exercise');

renderTaskList(taskList);



//export const addTask = document.getElementById("task-input") as HTMLInputElement;
//const taskArray:string[] = [];
//addTask.addEventListener("keydown", (ev)=>{
//    if(ev.key === "Enter"){
//        const newTask = addTask.value.trim();
//        if(newTask !== ""){
//            taskArray.push(newTask);
//            console.log(taskArray);
//        }
//    }
//});

