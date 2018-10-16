import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { SharedService } from 'src/app/services/shared.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 item:Task
  taskList:Task[]
  constructor(private _service:SharedService,private _router:Router) {
    this._service.GetAllTasks().subscribe(k=>this.taskList=k);
    this.item = new Task();
   }

  ngOnInit() {
  }
  AddTask()
  {
    this._service.AddTasks(this.item).subscribe(k=>this.taskList=k);
    this.item = new Task();
  }

}
