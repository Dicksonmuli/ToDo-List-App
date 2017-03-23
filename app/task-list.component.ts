import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.module';

@Component({
  selector: 'task-list',
  template: `
    <div>
    <h2>My Task List</h2>
    <div *ngFor="let currentTask of childTaskList">
    <ul class="heroes">

      <li>
      <span class="badge">{{currentTask.id}}</span> {{currentTask.name}} {{currentTask.description}}
       {{currentTask.price}}<br><button (click)="editTaskClicked(currentTask)">Edit</button>
        <!-- each Tasks here -->
          </li>
          </ul>
      </div>
      <div *ngFor="let currentTask of childTaskList | completeness"></div>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editTaskClicked(taskToEdit: task) {
   this.clickSender.emit(taskToEdit);
 }
}
