import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Observer } from "rxjs/Observer";
import { EmployeesComponent } from "./components/employees/employees.component";
import { getComponents } from "./components/dynamic-component/dynamic-component.component";
import { Content } from "./models/Content.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public currentDate = new Date();
  public currentYear: number;
  public componentData = {
  };
  public allComponents = getComponents()
  
  
  ngOnInit() {
    this.currentYear = this.currentDate.getFullYear();
  }

  public createComponent(component: Content): void {
    this.componentData = {
      component: component.component,
      inputs: {
        showNum: 9
      }
    };
  }
}
