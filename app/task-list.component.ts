//imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <div>
    <h2>My Task List</h2>
      <div *ngFor="let currentTask of childTaskList | completeness"></div>
      {{currentTask.description}}
        <!-- each Tasks here -->
      <button (click)="editTaskClicked(currentTask)"></button>
    </div>
  `
})
//main class
export class TaskListComponent {
  @Input() childTaskList: Task[];
  //declaration of new EventEmitter
  @Output() clickSender = new EventEmitter();
  //a method to emit task to edit when the button is clicked
  editTaskClicked(TaskToEdit: Task) {
   this.clickSender.emit(TaskToEdit);
 }
}
