export const addTask = document.getElementById("task-input") as HTMLInputElement;
const taskArray:string[] = [];
addTask.addEventListener("keydown", (ev)=>{
    if(ev.key === "Enter"){
        const newTask = addTask.value.trim();
        if(newTask !== ""){
            taskArray.push(newTask);
            console.log(taskArray);
        }
    }
});

