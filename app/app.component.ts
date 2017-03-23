import { Component } from '@angular/core';
import { Task } from './task.model';

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
(doneClickedSender)="edited()"
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
public masterTaskList: Task[] = [
  new Task(1, "The sec", true),
  new Task(2,"The Third", false),
  new Task(3, "The Fouth", false),
  new Task(4, "The Fifth", false),
  new Task(5, "The six",true),
  new Task(6,"The Seventh",true)
];
selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  edited() {
    this.selectedTask = null;
  }
newTask(newTaskFromChild: Task){
  this.masterTaskList.push(newTaskFromChild);
}
}
