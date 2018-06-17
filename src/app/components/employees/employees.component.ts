import { Component, OnInit } from '@angular/core';
import { Employee, getEmployees } from "../../models/Employee.model";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees: Employee[];

  constructor() { }

  ngOnInit() {
        this.employees = getEmployees();
  }

}
