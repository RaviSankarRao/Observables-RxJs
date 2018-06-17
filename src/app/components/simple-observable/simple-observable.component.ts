import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-simple-observable',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.css']
})
export class SimpleObservableComponent implements OnInit {

  public currentNumber: number;
  public currentTime: Date;

  constructor() { }

  ngOnInit() {

    // simple observable
    const myNumbers = Observable.interval(1000);

// subscribe to simple observable
    myNumbers.subscribe((number: number) => {
      this.currentNumber = number;
      this.currentTime = new Date();
    });
    
  }

}
