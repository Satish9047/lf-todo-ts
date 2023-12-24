export const addTask = document.getElementById("task-input") as HTMLInputElement;
const taskArray:string[] = [];
addTask.addEventListener("keydown", (ev)=>{
    if(ev.key === "Enter"){
        const taskName = addTask.value.trim();
        if(taskName !== ""){
            taskArray.push(taskName);
            console.log(taskArray);
        }
    }
});

