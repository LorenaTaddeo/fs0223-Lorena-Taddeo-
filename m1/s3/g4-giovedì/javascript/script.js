

class TODOList {
    constructor(){
        this.tasks = this.caricaTask();
        this.generaTask();
        console.log("tasks", this.tasks)
    }

    aggiungiTask(task){
        this.tasks.push(task);
        this.generaNuovoTask(task); 
        console.log("tasks", this.tasks);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));  
    }

    concludiTask(task){
        let index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        console.log(this.tasks);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    caricaTask(){
        let tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
        return tasks;
    }

    generaNuovoTask(task){
    let todo = document.getElementById('todo');
    let p = document.createElement('p');
    p.appendChild(document.createTextNode(task));
    todo.appendChild(p);
    p.addEventListener('click', (e)=>{
        this.concludiTask(task);
        e.srcElement.remove();
    })
}

    generaTask(){
        this.tasks.forEach((task) => {
            let todo = document.getElementById('todo');
            let p = document.createElement('p');
            p.appendChild(document.createTextNode(task));
            todo.appendChild(p);
            p.addEventListener('click', (e)=>{
                this.concludiTask(task);
                e.srcElement.remove();
        });

    });
}
}

document.addEventListener("DOMContentLoaded", ()=>{
    let newTaskBtn = document.getElementById('new-task-btn');
    let input = document.getElementById('new-task');
    let clearBtn = document.getElementById('clear-btn');

    let todoList = new TODOList()

    newTaskBtn.addEventListener("click",()=> {
        todoList.aggiungiTask(input.value);
    });

    input.addEventListener('keypress',(e)=> {
        if(e.key === 'Enter'){
            todoList.aggiungiTask(input.value);
            input.value = "";
        }
    });

    clearBtn.addEventListener("click",()=> {
        console.log("pulisci task");
    });

});