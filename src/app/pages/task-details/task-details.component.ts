import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TaskserviceService } from 'src/app/services/taskservice.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  task: Task[] | undefined;
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskserviceService
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTask(id)
      .subscribe(response => {
        this.task = response['data'];
      });
  }


}
