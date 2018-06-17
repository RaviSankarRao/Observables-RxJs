import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Message } from "../../models/Message.model";



@Component({
  selector: 'app-observable-events',
  templateUrl: './observable-events.component.html',
  styleUrls: ['./observable-events.component.css']
})
export class ObservableEventsComponent implements OnInit {

  public messages: Message[] = [
    { timeStamp: new Date(), message: 'Component loaded.'}
  ];

  constructor() { }

  ngOnInit() {

    // Creating custom observable
    const myObservable = Observable.create((observer: Observer<any>) => {

      // passing data to the stream
      setTimeout(function() {
        observer.next('first package');
      }, 2000);

      setTimeout(function() {
        observer.next('second package');
      }, 4000);

      // injecting error to the stream
      // setTimeout(function() {
      //   observer.error('This does not work');
      // }, 5000);

      // complete the stream
      setTimeout(function() {
        observer.complete();
      }, 7000);

      // passing data to the stream after complete
      // to make sure no more data is passed to the stream after complete
      setTimeout(function() {
        observer.next('package after complete');
      },10000);

    });

// subscribe to custom observable
    myObservable.subscribe(
      (data: string) => {
        this.messages.push({ timeStamp: new Date(), message: data});
      },
      (error: string) => {
        this.messages.push({ timeStamp: new Date(), message: error});
      },
      () => {
        this.messages.push({ timeStamp: new Date(), message: 'stream is complete'});
      }
    );

  }

}
