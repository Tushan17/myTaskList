import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';


@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  private taskAPIUrl: string = 'http://localhost:8070/api/';  // URL to web api

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskAPIUrl + 'task');
  }

  public getTask(id: number): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskAPIUrl + 'task/' + id);
  }

  updateTask(id: number, Task): Observable<any> {
    return this.http.put(this.taskAPIUrl + 'task/update/' + id, Task);
  }

  deleteTask(id: number) {
    return this.http.delete(this.taskAPIUrl + 'task/delete/' + id);
  }

}
