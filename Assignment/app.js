    //Declaration
let newTask = document.getElementById("txtTask");
let tasks = [];
let count = 0;

    //Add Task
function registerTask(){
    tasks.push(newTask.value);
    let list = document.getElementById("todoList");
    let tmp = `<li id="${count}" class="task">${tasks[count]}<button class="delete" onclick="deleteTask(${count});">🗑️</button></li>`;

    list.innerHTML += tmp;
    count++;

    clearForm();
}

    //Delete Task
function deleteTask(count){
    document.getElementById(count).remove();
    tasks.splice(count, 1);
}

    //Clear Form
function clearForm(){
    newTask.value="";
    newTask.focus();
}