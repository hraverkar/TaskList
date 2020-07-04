import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  public taskList: Task[] = [];
  ngOnInit(): void {
  }

  addTask(): void {
    this.taskList.push(new Task());
  }

  removeTask(index: number) {
    if (index > -1) {
      this.taskList.splice(index, 1);
    }
  }

}
