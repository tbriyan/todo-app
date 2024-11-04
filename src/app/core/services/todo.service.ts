import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  markAsCompleted(): void{
    console.log("Mark as complete from service")
  }
}
