import { Injectable } from '@angular/core';
import { Todo, User } from './types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [
    {
      id: 1,
      name: 'Rafo',
      todoList: [
        { id: 1, title: 'Gnal varsaviranoc' },
        { id: 2, title: 'Pamidor arnel' },
        { id: 3, title: 'React sovorel' },
      ]
    },

    {
      id: 2,
      name: 'Gugo',
      todoList: [
        { id: 4, title: 'Sovorel inputner' },
        { id: 5, title: 'Sovorel outputner' },
        { id: 6, title: 'Hac utel' },
      ]
    },

    {
      id: 3,
      name: 'Rob',
      todoList: [
        { id: 7, title: 'Hipotek pakel' },
        { id: 8, title: 'Gnal bank' },
      ]
    },
  ]

  getUserById(userID: number): User {
    return this.users.find(user => user.id === userID)
  }

  getAllTodos(): Todo[] {
    return this.users.flatMap(user => user.todoList);
  }

  getTodoById(todoID: number): Todo {
    const todos = this.getAllTodos();
    return todos.find(todo => todo.id === todoID);
  }

  getUserTodos(userID: number): Todo[] {
    const user = this.getUserById(userID)
    return user.todoList;
  }

}

