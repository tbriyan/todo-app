import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TodoItem } from "./shared/todo-item/todo-item.component";
import { MatGridListModule } from '@angular/material/grid-list'
import { NgFor } from '@angular/common';
import { ITodoItem } from './types/todo-item.types';

const todoItems: ITodoItem[] = [
  { title: 'Buy groceries', description: 'Milk, Bread, Cheese', isComplete: true },
  { title: 'Read a book', description: 'Finish reading current novel', isComplete: false },
  { title: 'Workout', description: '1-hour gym session', isComplete: false },
  { title: 'Call Mom', description: 'Catch up with family', isComplete: true },
  { title: 'Plan vacation', description: 'Research destinations', isComplete: false }
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    TodoItem,
    MatGridListModule,
    NgFor 
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app';
  fatherItem: string = 'This is a father value'
  todoItems: ITodoItem[] = todoItems
}
