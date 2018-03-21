import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees/employees-list.component';
import { CreateEmployeesComponent } from './employees/create-employees.component';
import { ViewEmployeeComponent } from './employees/view-employee.component';
const routes: Routes = [
  {path: "list", component: EmployeesListComponent},
  {path: "create", component: CreateEmployeesComponent},
  {path: "view", component: ViewEmployeeComponent},
  {path: "", redirectTo: "list", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponntArray = [
  EmployeesListComponent,
  CreateEmployeesComponent,
  ViewEmployeeComponent
];
