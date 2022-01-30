import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos = this.data.getAllTodos()
 
  constructor(private data: UsersService) {}

  f(id: number) {
    const todo = this.data.getTodoById(id);
    alert(todo.title);
  }
  
}
