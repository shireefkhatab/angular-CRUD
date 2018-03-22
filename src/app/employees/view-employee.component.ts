import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit, OnChanges {

  @Input() employee: Employee;
  prevEmployee: Employee;
  currentEmployee: Employee;

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    
    this.prevEmployee = changes.employee.previousValue? changes.employee.previousValue.firstName: 'Null';
    this.currentEmployee = changes.employee.currentValue.firstName;
  }


  ngOnInit() {

  }


}
