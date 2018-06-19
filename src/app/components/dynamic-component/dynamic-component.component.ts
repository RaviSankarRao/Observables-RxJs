import {
  Component, OnInit, ViewContainerRef, ViewChild,
  ReflectiveInjector, ComponentFactoryResolver, Input } from '@angular/core';
import { EmployeesComponent } from "../employees/employees.component";
import { Content } from "../../models/Content.model";
import { SimpleObservableComponent } from "../simple-observable/simple-observable.component";
import { ObservableEventsComponent } from "../observable-events/observable-events.component";
import { UsingFromEventComponent } from "../using-from-event/using-from-event.component";

@Component({
  selector: 'app-dynamic-component',
  template: `<div #dynamicComponentContainer></div>`,
  entryComponents: [
    EmployeesComponent, SimpleObservableComponent, ObservableEventsComponent,
    UsingFromEventComponent],
})
export class DynamicComponentComponent implements OnInit {

  currentComponent = null;
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

// component: Class for the component you want to create
  // inputs: An object with key/value pairs mapped to input name/input value
  @Input() 
  set componentData(data: {component: any, inputs: any }) {
    if (!data) {
      return;
    }

    // Inputs need to be in the following format to be resolved properly
    let inputProviders = Object.keys(data.inputs).map((inputName) => {return {provide: inputName, useValue: data.inputs[inputName]};});
    let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
    
    // We create an injector out of the data we want to pass down and this components injector
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
    
    // We create a factory out of the component we want to create
    let factory = this.resolver.resolveComponentFactory(data.component);
    
    // We create the component using the factory and the injector
    let component = factory.create(injector);
    
    // We insert the component into the dom container
    this.dynamicComponentContainer.insert(component.hostView);

    // Destroy the previously created component
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }
    
    this.currentComponent = component;
  }

  ngOnInit() {
  }

}

export function getComponents(): Content[] {
  const allComponents: Content[] = [
    { component: SimpleObservableComponent, name: 'Simple Observable', description: 'Demonstrates Routing and Observables'  },
    { component: ObservableEventsComponent, name: 'Observable Events', description: 'Demonstrates Routing and Observables'  },
    { component: UsingFromEventComponent, name: 'using fromEvent', description: 'Demonstrates Routing and Observables'  },
    { component: EmployeesComponent, name: 'For Routing', description: 'Demonstrates Routing and Observables'  },
  ];
    return allComponents;
}
