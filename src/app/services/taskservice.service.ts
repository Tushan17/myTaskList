import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';


@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  private taskAPIUrl: string = 'http://localhost:8070/api/';  // URL to web api

  constructor(private http: HttpClient) { }

  public getTasks() {
    return this.http.get(this.taskAPIUrl + 'task');
  }

  public getTask(id: string) {
    return this.http.get(this.taskAPIUrl + 'task/' + id);
  }

}
