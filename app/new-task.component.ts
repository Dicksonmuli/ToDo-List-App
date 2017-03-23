import { Component, Output, EventEmitter} from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <div>
    <h4>Add Stock</h4>
    <label>New Task Id</label>
    <input #newId>
    <label>New Name</label>
    <input #newName>
    <label>New Description</label>
    <input #newDescription>
    <label>New Price</label>
    <input #newPrice>
    <button (click)="addClicked(newId.value, newName.value, newDescription.value, newPrice.value);
                      newId.value='';
                      newName.value='';
                      newDescription.value='';
                      newPrice.value='';
                      ">Add</button>
    </div>
  `
})

export class NewTaskComponent{
  @Output() newTaskSender = new EventEmitter();
  addClicked(id: number, name: string, description: string, price: number){
    var newTaskToAdd: Task = new Task(id, description);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
