import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';
@Injectable()
export class EmployeesDbService {

  constructor() { }
  private employees: Employee[] = [
    {
      id: 1,
      firstName: 'Mark',
      contact_via_email: true,
      contact_via_phone: true,
      email: 'mark@pragimtech.com',
      phone: +4525524344,
      gender: 'Male',
      department: 'IT',
      dob: new Date('10/25/1988'),
      password: 'abcPassword',
      cPassword: 'abcPassword',
      photoPath: '../../assets/images/mark.png'
    },
    {
      id: 2,
      firstName: 'Mary',
      contact_via_email: true,
      contact_via_phone: false,
      email: 'a@b.com',
      phone: +4525524344,
      gender: 'Female',
      department: 'HR',
      dob: new Date('11/20/1979'),
      password: 'abcPassword',
      cPassword: 'abcPassword',
      photoPath: '../../assets/images/mary.png'
    },
    {
      id: 3,
      firstName: 'John',
      contact_via_email: false,
      contact_via_phone: true,
      email: 'b@n.net',
      phone: +5432978640,
      gender: 'Male',
      dob: new Date('3/25/1976'),
      department: 'IT',
      password: 'abcPassword',
      cPassword: 'abcPassword',
      photoPath: '../../assets/images/john.png'
    }
  ];

  employee: Employee;
  
  getEmployees(){
    return this.employees;
  }
  saveNewEmployee(employee){
    this.employees.push(employee);
  }

  shareDate(emp){
    this.employee = emp;
  }
}
