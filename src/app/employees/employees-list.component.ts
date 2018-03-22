import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeesDbService } from '../employees-db.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[];
  
  constructor(private _employeeSerive: EmployeesDbService) { }
  selectedEmployee: Employee;
  index = 0;
  ngOnInit() {
     this.employees = this._employeeSerive.getEmployees();
     this.selectedEmployee = this.employees[this.index];
  }
  
  viewPrev(){
    this.index--;
    if (this.index < 0){
      this.index = 2;
    }

    this.selectedEmployee = this.employees[this.index];
  }

  viewNext(){
    this.index++;
    if (this.index > 2){
      this.index = 0;
    }
    
    this.selectedEmployee = this.employees[this.index];
  }
}
