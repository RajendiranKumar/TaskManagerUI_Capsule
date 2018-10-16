import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from 'src/app/models/task';
import { of } from 'rxjs';
import {ActivatedRoute } from '@angular/router';
import {Router } from '@angular/router';
import {DatePipe} from '@angular/common';
import { moment } from 'ngx-bootstrap/chronos/test/chain';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  searchitem:Task
  tasks:Task[]
  filteredlist:Task[]
  
  constructor(private _service:SharedService, 
    private _router:Router, 
    private _datepipe:DatePipe) {
      
    this.searchitem = new Task()
    this._service.GetAllTasks().subscribe(k=>this.tasks=k);
   }

  ngOnInit() {
  }

  SearchByTaskName()
  {
    this._service.GetAllTasks().subscribe(k=>this.filteredlist=k);
    this.tasks = this.filteredlist.filter
    (result => result.Task_Name.includes(this.searchitem.Task_Name))
  
  }
  SearchByParentTask()
  {
    this._service.GetAllTasks().subscribe(k=>this.filteredlist=k);
    this.tasks = this.filteredlist.filter
    (result => result.Parent_Task.includes(this.searchitem.Parent_Task))
  
  }
  SearchByPriority()
  {
    this._service.GetAllTasks().subscribe(k=>this.filteredlist=k);
    this.tasks = this.filteredlist.filter
    (result => result.Priority >= this.searchitem.Priority_From ||
    result.Priority <= this.searchitem.Priority_To)
  
  }
  SearchByStartDate()
  {
    this._service.GetAllTasks().subscribe(k=>this.filteredlist=k);
    this.tasks = this.filteredlist.filter
    (result => this._datepipe.transform(result.Start_Date, 'yyyy-MM-dd')
  == this._datepipe.transform(this.searchitem.Start_Date, 'yyyy-MM-dd'))
  
  }
  
  SearchByEndDate()
  {
    this._service.GetAllTasks().subscribe(k=>this.filteredlist=k);
    this.tasks = this.filteredlist.filter
    (result => this._datepipe.transform(result.End_Date, 'yyyy-MM-dd')
  == this._datepipe.transform(this.searchitem.End_Date, 'yyyy-MM-dd'))
  }
  
  EditTask(taskId:number)
  {
    this._router.navigateByUrl('update/'+taskId);
  }
  EndTask(taskId:number)
  {
    this._service.EndTask(taskId).subscribe(l=>this.tasks=l);
  }
  DeleteTask(taskId:number)
  {
    this._service.DeleteTask(taskId).subscribe(m=>this.tasks=m);
  }

}

