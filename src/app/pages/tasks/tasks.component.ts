import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/interfaces/task';
import { TaskserviceService } from 'src/app/services/taskservice.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  taskResponse: boolean;

  searchForm = new FormGroup({
    searchtxt: new FormControl('')
  });

  constructor(private taskService: TaskserviceService) { }

  ngOnInit() {
    this.retriveTasks();

  }

  retriveTasks() {
    this.taskService.getTasks().subscribe(response => {
      this.taskResponse = response['status'];
      this.tasks = response['data'];
    });

  }

  searchTask() {
    let id = this.searchForm.get('searchtxt').value;
    console.log(this.searchForm.get('searchtxt').value);

    this.taskService.getTask(id).subscribe(Response => {
      this.taskResponse = Response['status'];
      this.tasks = Response['data'];
    });
  }

}
