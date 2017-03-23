import { Component, Output, EventEmitter} from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <div>
    <h4>Add Stock</h4>
    <label>New Task Id</label>
    <input #newId>
    <label>New Description</label>
    <input #newDescription><br>
    <button (click)="addClicked(newId.value, newDescription.value);
                      newId.value='';
                      newDescription.value='';
                      ">Add</button>
    </div>
  `
})

export class NewTaskComponent{
  @Output() newTaskSender = new EventEmitter();
  addClicked(id: number, description: string, done: boolean){
    var newTaskToAdd: Task = new Task(id, description, done);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
