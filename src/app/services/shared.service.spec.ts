import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';
import { Task } from 'src/app/models/task';

describe('SharedService', () => {
  let service:SharedService

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [SharedService],
    });

    // inject the service
    service = TestBed.get(SharedService);
});

  it('should add the Task entity to the database',()=>
  {
    let item = new Task();
    item.Task_Name="AngularTest1"
    item.Priority=4
  item.Parent_Task="Test60"
  item.Start_Date=new Date('10/01/2018')
  item.End_Date=new Date('10/31/2018')
  let allitems : Task[]
  service.GetAllTasks().subscribe(k=>allitems=k)
  const countbeforeadd:number = allitems.length
  service.AddTasks(item);
  service.GetAllTasks().subscribe(k=>allitems=k)
  const countafteradd:number = allitems.length
  expect(countbeforeadd+1).toEqual(countafteradd);
  });
 
});
