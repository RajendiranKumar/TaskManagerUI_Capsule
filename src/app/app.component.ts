import { Component } from '@angular/core';
import { Task } from 'src/app/models/task';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskManagerUI';
  constructor(private _router:Router)
  {
  }

  ChangeRouteURL()
  {
    this._router.navigateByUrl('/view');
  }
}
