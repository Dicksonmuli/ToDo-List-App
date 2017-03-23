import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div *ngIf="selectedChildTask" class="">
      <h1>Enter Task Info</h1>
      <div>
        <label> Task ID:</label>
        <input [(ngModel)]="selectedChildTask.id">
      </div>
      <div>
        <label>Name:</label>
        <input [(ngModel)]="selectedChildTask.name">
      </div>
      <div>
        <label>Description:</label>
        <input [(ngModel)]="selectedChildTask.description">
      </div>
      <div>
        <label>Price:</label>
        <input [(ngModel)]="selectedChildTask.price">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditTaskComponent {
  @Input() selectedChildTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked(){
    this.doneClickedSender.emit();
  }

}
