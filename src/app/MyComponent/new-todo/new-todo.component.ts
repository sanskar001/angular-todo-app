import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.css',
})
export class NewTodoComponent {
  title: string;
  description: string;

  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  todoSubmitHandler() {
    const newTodo: Todo = {
      sno: new Date().getTime(),
      title: this.title,
      desc: this.description,
      active: true,
    };

    this.onAddTodo.emit(newTodo);
  }
}
