import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateTask } from 'src/app/models/create-task';
import { TaskserviceService } from 'src/app/services/taskservice.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  createtask = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    long_description: new FormControl('', Validators.required),
  })

  constructor(private taskService: TaskserviceService) {

  }

  saveTask() {

    if (this.createtask.valid) {
      let title = this.createtask.get('title').value;
      let description = this.createtask.get('description').value;
      let long_description = this.createtask.get('long_description').value;

      const task = new CreateTask(title, description, long_description);

      this.taskService.createTask(task).subscribe(response => {
        console.log(response);
      });

    }



  }

}
