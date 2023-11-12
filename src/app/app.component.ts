import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public task: string = '';
  public taskList: any[] = [];

  ngOnInit() {
    const storedTaskList = localStorage.getItem('taskList');
    if (storedTaskList) {
      this.taskList = JSON.parse(storedTaskList);
    }
  }

  addTask() {
    const taskLoad = { task: this.task, status: 'taskCreated', time: new Date().toLocaleString(), statusImage: 'assets/circle.png' };
    if (taskLoad.task !== '') {
      this.taskList.push(taskLoad);
      this.saveTaskListToLocalStorage();
    }
    this.task = '';
  }

  taskCreateOrDone(task: any) {
    if (task.status === 'taskCreated') {
      task.status = 'taskDone';
      task.statusImage = 'assets/check-mark.png';
    } else {
      task.status = 'taskCreated';
      task.statusImage = 'assets/circle.png';
    }
    this.saveTaskListToLocalStorage();
  }

  private saveTaskListToLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  editTask(task: any) {
    const modftask = prompt('Edit your task:', task.task + ' ');
  
    if (modftask !== null) {
      task.task = modftask;
      this.saveTaskListToLocalStorage();
    }
  }

  delTask(index: number) {
    if (index >= 0 && index < this.taskList.length) {
      const confirmDelete = confirm('Are you sure you want to delete this task?');
      if (confirmDelete) {
        this.taskList.splice(index, 1);
        this.saveTaskListToLocalStorage();
      }
    }
  }


  
}
