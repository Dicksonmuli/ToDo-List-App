//imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <div>
    <h2>My Task List</h2>
      <div class="task-done" (change)="onChange($event.target.value)">
      <button value="isDone">Tasks Done</button>
      <button value="notDone">Tasks NotDone</button>
      <button value="all">All Tasks</button>
      </div>
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
