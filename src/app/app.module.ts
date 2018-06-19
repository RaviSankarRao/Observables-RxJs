import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleObservableComponent } from './components/simple-observable/simple-observable.component';
import { ObservableEventsComponent } from './components/observable-events/observable-events.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeesComponent } from './components/employees/employees.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { UsingFromEventComponent } from './components/using-from-event/using-from-event.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleObservableComponent,
    ObservableEventsComponent,
    EmployeeDetailsComponent,
    EmployeeCardComponent,
    EmployeesComponent,
    DynamicComponentComponent,
    UsingFromEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
