import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'First',
        desc: 'This is description',
        active: true,
      },
      {
        sno: 2,
        title: 'Second',
        desc: 'This is description',
        active: true,
      },
      {
        sno: 3,
        title: 'Third',
        desc: 'This is description',
        active: true,
      },
    ];
  }

  todoDeleteHandler(todo: Todo) {
    const todoIndex = this.todos.findIndex((item) => item.sno === todo.sno);
    this.todos.splice(todoIndex, 1);
  }
}
