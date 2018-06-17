import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-simple-observable',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.css']
})
export class SimpleObservableComponent implements OnInit, OnDestroy {

  public currentNumber: number;
  public currentTime: Date;
  public myNumbersObservable: Subscription;

  constructor() { }

  ngOnInit() {

    // simple observable
    const myNumbers = Observable.interval(1000);

    // subscribe to simple observable
    this.myNumbersObservable = myNumbers.subscribe((number: number) => {
      this.currentNumber = number;
      this.currentTime = new Date();
      console.log(this.currentTime);
    });

      console.log('on subscribe called');
  }

  ngOnDestroy() {
    console.log('on unsubscribe called');
    this.myNumbersObservable.unsubscribe();
  }
}
