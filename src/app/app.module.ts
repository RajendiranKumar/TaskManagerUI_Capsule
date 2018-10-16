import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddComponent } from './ui/add/add.component';
import { UpdateComponent } from './ui/update/update.component';
import { ViewComponent } from './ui/view/view.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule, Routes} from '@angular/router';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { HttpModule } from '@angular/http';
import { SharedService } from 'src/app/services/shared.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    ViewComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot([
      {path:'', redirectTo:'/view',pathMatch: 'full'},
      {path:'add', component:AddComponent},
      {path:'update/:taskId', component: UpdateComponent},
      {path:'view', component:ViewComponent}
    ]),
    HttpModule,
  ],
  providers: [DatePipe,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
