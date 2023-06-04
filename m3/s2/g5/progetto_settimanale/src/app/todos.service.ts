import { Injectable } from '@angular/core';
import { Itodos } from './itodos';
import { Todos } from './todos';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl:string = 'http://localhost:3000/todos';

  allTodos: Itodos[] = [];

  constructor() { }

  getTodos():Promise<Itodos[]>{
    return fetch(this.apiUrl).then(response => response.json());
}

  addTodos(todos:Itodos):Promise<Itodos>{
    return fetch(this.apiUrl,{
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todos)
    }).then(response => response.json());
  }

  updateTodos(todos:Itodos){
    todos.completed = true;
    return fetch(this.apiUrl + '/' + todos.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todos)
    }).then(response => response.json());
  }

  deleteTodos(todo:Todos){
    return fetch(this.apiUrl+'/'+todo.id,{
      method:'DELETE',
    }).then(response => response.json());
  }

}
