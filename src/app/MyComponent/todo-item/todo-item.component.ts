import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoToogleDone: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
  }

  checkboxChangeHandler(todo: Todo) {
    this.todoToogleDone.emit(todo);
  }
}
