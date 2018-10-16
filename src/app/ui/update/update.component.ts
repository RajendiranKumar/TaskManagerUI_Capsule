import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  selectedTask:Task
  formatedtask:Task
  taskId:number
  taskList:Task[]
  url : string
  constructor(private _activatedRoute: ActivatedRoute, 
    private _service:SharedService, private _datepipe:DatePipe,
    private _router:Router,
    private location:Location) {
    this._activatedRoute.params.subscribe(id=> this.taskId=id['taskId']);
    this._service.GetAllTasks().subscribe(k=>this.taskList=k);
    this._service.GetTaskByID(this.taskId).subscribe(k=>this.selectedTask=k);
   }
 
  ngOnInit() {
    
  }

  UpdateTask()
  {
    this._service.UpdateTasks(this.selectedTask).subscribe();
    //this._router.navigateByUrl('/view');
  }

  CancelTask()
  {
    this._router.navigateByUrl('/view');
  }

}
