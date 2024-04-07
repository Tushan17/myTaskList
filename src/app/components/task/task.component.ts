import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TaskserviceService } from 'src/app/services/taskservice.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;
  @Input() routeButton: boolean;
  widthS: string;

  visible: boolean = false;
  status: object[] = [
    { code: 'To Do' },
    { code: 'Doing' },
    { code: 'Done' }
  ];

  taskForm = new FormGroup({
    selectedStatus: new FormControl(null)
  });

  constructor(
    private taskService: TaskserviceService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.widthfunction();
  }

  widthfunction() {
    // if (this.routeButton) {
    //   this.widthS = '200px'
    // } else {
    //   this.widthS = '100%'
    // }

    this.routeButton ? '200px' : '100%';
  }

  showDialog() {
    this.visible = true;
  }

  updateTaskStatus() {
    let request = this.task;

    let statusInput = this.taskForm.get('selectedStatus').value;

    if (statusInput != null) {
      request.status = statusInput['code'];

      this.taskService.updateTask(0, request).subscribe(response => {
        console.log(response['message']);
      });
    }
  }

  deleteTask(id) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.router.navigateByUrl('/');
    })
  }

}
