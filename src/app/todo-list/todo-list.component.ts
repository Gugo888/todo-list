import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos = this.data.getAllTodos()
 
  constructor(private data: DataService) {}

  f(id: number) {
    const todo = this.data.getTodoById(id);
    alert(todo.title);
  }
  
}
