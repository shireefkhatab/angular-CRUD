import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeesDbService } from '../employees-db.service';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employee: Employee;
  constructor( private _employeesDbService: EmployeesDbService) { }

  ngOnInit() {
    this.employee = this._employeesDbService.employee;
  }

  
}
