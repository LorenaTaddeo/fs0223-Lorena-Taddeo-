import { Component, OnInit } from '@angular/core';
import { Itodos } from 'src/app/itodos';
import { Todos } from 'src/app/todos';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

    todos: Itodos[] = [];
    loading: boolean = true;
  
    constructor(private todosSvc: TodosService){}
  
    ngOnInit(){
      this.getTodos();
    }
  
    filterArrayTodo:Todos[] = [];

    getTodos(){
      this.todosSvc.getTodos()
      .then(todosResponse => {
      this.todos = todosResponse;
      this.loading = false;
      this.filterArrayTodo = todosResponse.filter((res) => res.completed === true);
      })
    }

    delete(todos:Todos){
      this.todosSvc.deleteTodos(todos)
      setTimeout(() => {
        this.getTodos()
      },100);

    }
    
  }
  


