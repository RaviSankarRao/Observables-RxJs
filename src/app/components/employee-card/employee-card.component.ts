import { Component, OnInit, Input } from '@angular/core';
import { Employee } from "../../models/Employee.model";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Input()
  public employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
