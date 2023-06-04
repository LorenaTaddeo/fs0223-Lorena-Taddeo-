import { Component, OnInit } from '@angular/core';
import { Itodos } from 'src/app/itodos';
import { Todos } from 'src/app/todos';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Itodos[] = [];
  loading: boolean = true;
  todo2: Itodos = new Todos('', false)

  constructor(private todosSvc: TodosService){}

  ngOnInit(){
    this.getTodos();
  }


  filterArrayTodos:Todos[] = [];

  getTodos(){
    this.todosSvc.getTodos()
    .then(todosResponse => {
          this.todos = todosResponse;
          this.loading = false;
          this.filterArrayTodos = todosResponse.filter((res) => res.completed === false);
      })}

    addTodos(){
      this.todosSvc.addTodos(this.todo2)
      this.getTodos()
    }

    update(todo2:Todos){
      this.todosSvc.updateTodos(todo2)
      setTimeout(() => {
      this.getTodos()
      },100);
    }
  
}

