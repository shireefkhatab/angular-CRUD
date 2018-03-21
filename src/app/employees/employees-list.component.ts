import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeesDbService } from '../employees-db.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[];
  
  constructor(private _employeeSerive: EmployeesDbService,
              private _router: Router) { }

  ngOnInit() {
     this.employees = this._employeeSerive.getEmployees();
  }
  
  viewEmpolyee(employee){
    // pass employee data
    this._employeeSerive.shareDate(employee)
    // route to view-employee
    this._router.navigate(['view']);
  }
}
