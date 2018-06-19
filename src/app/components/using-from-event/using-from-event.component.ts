import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";


interface Coordinates {
  clientX: number;
  clientY: number;
}

@Component({
  selector: 'app-using-from-event',
  templateUrl: './using-from-event.component.html',
  styleUrls: ['./using-from-event.component.css']
})
export class UsingFromEventComponent implements OnInit, OnDestroy {

  public coordinates: Coordinates = {
    clientX: 0,
    clientY: 0,
  };

  public mouseMoveSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const mouseMoveObservable = Observable.fromEvent(document, 'mousemove');
    this.mouseMoveSubscription = mouseMoveObservable.subscribe((event: Coordinates) => {
      this.coordinates.clientX = event.clientX;
      this.coordinates.clientY = event.clientY;
    });

  }

  ngOnDestroy() {
    this.mouseMoveSubscription.unsubscribe();
  }

}
