# About this app

This contains examples on how observables work and how their use can be leveraged for asyn programming

# How to run
- Clone the branch to your local system.
- Run `npm install` to install all packages
- Run `npm start` to compile and run your solution
- Visit http://localhost:4200 on your browser

# Components
- Located inside [src/app/components](https://github.com/RaviSankarRao/Observables-RxJs/tree/master/src/app/components)
## [simple-observable](https://github.com/RaviSankarRao/Observables-RxJs/tree/master/src/app/components/simple-observable)
A simple observable that uses `interval` function to send continous data packages in a given interval of time

## [observable-events](https://github.com/RaviSankarRao/Observables-RxJs/tree/master/src/app/components/observable-events)
Demosntrates how to create an Observable for an Observer and use of the sequence of ongoing events ordered in time
- Emits a value using `next`
- Handles error using `error`
- Handles complete signla using `complete`

## [using-from-event](https://github.com/RaviSankarRao/Observables-RxJs/tree/master/src/app/components/using-from-event)
Uses `Observable.fromEvent` demonstrating how to create observables from events.

## [dynamic-component](https://github.com/RaviSankarRao/Observables-RxJs/tree/master/src/app/components/dynamic-component)
- Uses `ComponentFactoryResolver` to load components dynamically
