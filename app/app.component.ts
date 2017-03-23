import { Component } from '@angular/core';
import { Task } from './task.module';

@Component({
  selector: 'my-app',
  template: `
  <div class="container" id = "first" >

<div class="col-xs-4" >
<h1>{{title}}</h1>
<task-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
     ></task-list>
  </div>
<div class="col-xs-4" >
<edit-task
[selectedChildTask]="selectedTask"
(doneClickedSender)="edited"
  ></edit-task>
</div>
<div class="col-xs-4" >
<new-task
(newTaskSender)="newTask"
></new-task>
</div>
</div>


  `

})

export class AppComponent{
public masterTaskList: Bar[] = [
  new Bar(1,"Narco", "The First", 10, false),
  new Bar(2,"Bombasto", "The First", 20, true),
  new Bar(3,"Celeritas", "The First", 30, true),
  new Bar(4,"Magneta", "The First", 40, true),
  new Bar(5,"Magma", "The First", 50, true),
  new Bar(6,"Tornado", "The First", 60, false),
];
selectedTask: Bar = null;
  showDetails(clickedTask: Bar) {
    this.selectedTask = clickedTask;
  }
  edited() {
    this.selectedTask = null;
  }
newTask(newTaskFromChild: Bar){
  this.masterTaskList.push(newTaskFromChild)
}
}
