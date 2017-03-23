//imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <div>
    <h2>My Task List</h2>
      <select class="task-done" (change)="onChange($event.target.value)">
      <option value="isDone">Tasks Done</option>
      <option value="notDone">Tasks NotDone</option>
      <option value="all">All Tasks</option>
      </select>
      <div *ngFor="let currentTask of childTaskList | completeness: selectedCompleteness ">

        <!-- each Tasks here -->
        <task-display [task]="currentTask"></task-display>
        <button (click)="editTaskClicked(currentTask)">Edit</button>
      </div>
    </div>
  `
})
//main class
export class TaskListComponent {
  @Input() childTaskList: Task[];
  //declaration of new EventEmitter
  @Output() clickSender = new EventEmitter();
  selectedCompleteness: string = "notDone";
  onChange(optionFromMenu){
    this.selectedCompleteness = optionFromMenu;
    console.log(optionFromMenu);
  }

  //a method to emit task to edit when the button is clicked
  editTaskClicked(TaskToEdit: Task) {
   this.clickSender.emit(TaskToEdit);
 }
}
