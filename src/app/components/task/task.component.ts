import { Component, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { CreateTask } from 'src/app/models/create-task';
import { TaskserviceService } from 'src/app/services/taskservice.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;
  @Input() routeButton: boolean;

}
