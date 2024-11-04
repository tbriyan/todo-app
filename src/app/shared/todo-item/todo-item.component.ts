import { NgIf } from '@angular/common';
import { AfterViewInit, Component, inject, Input, ViewChild, ɵɵpureFunction1 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ITodoItem } from '../../types/todo-item.types';
import { TodoService } from '../../core/services/todo.service';

@Component({
    selector: 'todo-item',
    standalone: true,
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss'],
    imports: [
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatIconModule,
        FormsModule,
        NgIf
    ],
})

export class TodoItem implements AfterViewInit {
    // Importar dependencia del servicio
    private todoService = inject(TodoService)

    title: string = ''
    description: string = ''
    isComplete: boolean = false

    @Input() 
    item!: ITodoItem

    @Input({required: true, alias: 'aliasFatherItem', transform: toMay}) // toMay() valor que transforma el texto a MAYUSCULAS
    fatherItem!: string 

    @ViewChild(MatAccordion) accordion!: MatAccordion;

    setComplete(event: MouseEvent): void {
        event.stopPropagation();                                                
        this.isComplete = !this.isComplete
        console.log("I complete this task with setComplete function!")
        this.todoService.markAsCompleted()
        console.log(this.fatherItem) // This is a father item
    }
    
    archiveTodo(event: MouseEvent): void {
        console.log("Ejecutar el evento de archivar la tarea")
        event.stopPropagation();
    }
    deleteTodo(event: MouseEvent): void {
        console.log("Ejecutar el evento de eliminar la tarea")
        event.stopPropagation();            
    }

    ngAfterViewInit() {
        console.log(this.accordion);
    }

}


function toMay(value: string): string{
    return value.toUpperCase()
}   