//fuction for getting today date
export function getDayDate(){
    const todayDateElement = document.getElementById('today-date') as HTMLInputElement | null;
    let date = new Date();
    const week: string[] = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    let today = `${week[dayOfWeek]}, ${dayOfMonth}-${month}-${year}`;
    //    console.log(today);

    if (todayDateElement) {
        todayDateElement.textContent = today;
    } else {
        console.error("Element with ID 'today-date' not found.");
    }
}