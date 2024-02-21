import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponent/todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo app';

  constructor() {}

  // Updating title after 2 seconds

  // constructor() {
  //   setTimeout(() => {
  //     this.title = 'title changed';
  //   }, 2000);
  // }
}
