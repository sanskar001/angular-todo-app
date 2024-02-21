import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Todo } from '../../Todo';
import { NewTodoComponent } from '../new-todo/new-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, NewTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  localItem: string | null;
  todos: Todo[];

  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  addTodoHandler(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  todoDeleteHandler(todo: Todo) {
    const todoIndex = this.todos.findIndex((item) => item.sno === todo.sno);
    this.todos.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
