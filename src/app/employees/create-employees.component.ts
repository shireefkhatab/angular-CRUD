import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeesDbService } from '../employees-db.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {
  department = "0";
  departments: Department[] = [
    {id: 0, name: "Select"},
    {id: 1, name: "IT"},
    {id: 2, name: "UI"},
    {id: 3, name: "UX"}
  ];

    bsConfig: Partial<BsDatepickerConfig>;


  constructor(private _employeesDbService: EmployeesDbService,
              private _router: Router) {
    this.bsConfig = Object.assign({}, { 
                                        containerClass: "theme-dark-blue",
                                        showWeekNumbers: false,
                                        dateInputFormat: "DD/MM/YYYY"
                                      })
   }

   employee: Employee = {
    id : null,
    firstName : null,
    contact_via_email: null,
    contact_via_phone: null,
    email: null,
    phone: null,
    gender: null,
    department: null,
    dob: null,
    password: null,
    cPassword: null,
    photoPath: null
   }

  ngOnInit() {
  }


  saveEmployee(){
    this._employeesDbService.saveNewEmployee(this.employee);
    this._router.navigate(['list']);
  }
}
