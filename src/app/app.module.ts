import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleObservableComponent } from './components/simple-observable/simple-observable.component';
import { ObservableEventsComponent } from './components/observable-events/observable-events.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleObservableComponent,
    ObservableEventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
