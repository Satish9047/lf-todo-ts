//import 'normalize.css';

//importing classes
import {Task} from "./class/Task.ts";
import {TaskList} from "./class/TaskList.ts";

//refrencing the html elements in an variable
const addTask = document.getElementById("task-input") as HTMLInputElement;
const searchInput = document.getElementById("search-task") as HTMLInputElement;
const taskListElement = document.getElementById("task-incompleted") as HTMLInputElement;
const completedTaskListElement = document.getElementById("task-completed") as HTMLInputElement;

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
    completedTaskListElement.innerHTML = "";
    tasks.list.forEach((task)=>{

        //creating the li html element
        const element = document.createElement("li");
        element.classList.add("task-item")
        const completedElement = document.createElement("li");
        completedElement.classList.add("task-item")

        //creating the checkbox input
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox"
        checkBox.checked = task.isCompleted;
        console.log(task.isCompleted);

        //adding event listiner to the checkbox
        checkBox.addEventListener("change", ()=>{
            toggleCompletedTask(task.id);
            renderTaskList(taskList);
            //console.log(task.isCompleted);
        })

        // Creating a label for the checkbox
        const label = document.createElement("label");
        label.classList.add("item-content");
        label.appendChild(checkBox);
        label.appendChild(document.createTextNode(task.taskName));

        if(!task.isCompleted){
            element.appendChild(label);
            taskListElement.appendChild(element);
        }
        if(task.isCompleted){
            completedElement.appendChild(label);
            completedTaskListElement.appendChild(completedElement);
        }
    })
}

//adding event listener to addTask input
addTask.addEventListener("keydown", (ev)=>{
    if(ev.key === "Enter"){
        const newTaskName = addTask.value.trim();
        if(newTaskName !== ""){
            createTask(newTaskName);
            renderTaskList(taskList);
            addTask.value = "";
        }
    }
});

//adding event listener to search task input
searchInput?.addEventListener("input", (ev)=>{
    const searchParam = (ev.target as HTMLInputElement)?.value;
    render(searchParam);
})

//creating the render function
function render(searchParam: string = ""){
    const filterTaskList = searchTaskItem(taskList, searchParam);
    renderTaskList(filterTaskList);
}

