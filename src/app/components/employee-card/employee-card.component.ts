import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Employee } from "../../models/Employee.model";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Input()
  public employee: Employee;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public showEMployeeDetails(): void {
    window.open('/avenger');
    //this.router.navigate(['/avenger']);
  }

}
