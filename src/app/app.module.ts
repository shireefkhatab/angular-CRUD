import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponntArray } from './app-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';

import {EmployeesDbService } from './employees-db.service';
import { ViewEmployeeComponent } from './employees/view-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponntArray,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [ EmployeesDbService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
