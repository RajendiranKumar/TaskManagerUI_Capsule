import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../models/task';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  url:string='http://localhost/TaskManager.API/GetAllTasks';
  results:Observable<Task[]>
  constructor(private _http:Http) { }

  GetAllTasks():Observable<Task[]>
  {
    this.url ='http://localhost/TaskManager.API/GetAllTasks';
     return this._http.get(this.url)
    .pipe(map((response:Response)=> <Task[]>response.json()));
    
  }

  GetTaskByID(taskId:number):Observable<Task>
  {
    this.url ='http://localhost/TaskManager.API/GetTaskByID';
     return this._http.get(this.url + "/?taskId=" + taskId)
    .pipe(map((response:Response)=> <Task>response.json()));
    
  }

  AddTasks(task:Task):Observable<Task[]>
  {
    this.url ='http://localhost/TaskManager.API/AddTask';
     return this._http.post(this.url,task)
    .pipe(map((response:Response)=> <Task[]>response.json()));
    
  }

  UpdateTasks(task:Task):Observable<Task[]>
  {
    this.url ='http://localhost/TaskManager.API/UpdateTask';
     return this._http.post(this.url,task)
    .pipe(map((response:Response)=> <Task[]>response.json()));
  }

  DeleteTask(taskId:number):Observable<Task[]>
  {
    this.url ='http://localhost/TaskManager.API/DeleteTask';
    return this._http.get(this.url + "/?taskId=" + taskId)
    .pipe(map((response:Response)=> <Task[]>response.json()));
  }

  EndTask(taskId:number):Observable<Task[]>
  {
    this.url ='http://localhost/TaskManager.API/EndTask';
    return this._http.get(this.url + "/?taskId=" + taskId)//,toEnd)
    .pipe(map((response:Response)=> <Task[]>response.json()));
  }
}
