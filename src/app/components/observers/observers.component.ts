import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-observers',
  templateUrl: './observers.component.html',
  styleUrls: ['./observers.component.css']
})
export class ObserversComponent implements OnInit {

  observable: Observable<string>;

  constructor() {
    console.log('ENTER ObserversComponent Constrcutor');
    console.log('EXIT ObserversComponent Constrcutor');
  }

  ngOnInit() {
    console.log('ENTER ObserversComponent ngOnInit');
    this.observable = Rx.Observable.create(function (observer) {
      observer.next('twenty');
      observer.next('thirty');
      observer.next('forty');
      setTimeout(() => {
        observer.next('fifty');
        observer.complete();
      }, 1000);
    });
    console.log('just before subscribe');
    this.observable.subscribe({
      next: x => console.log('OBSERVER1 - got value ' + x),
      error: err => console.error('OBSERVER1 - something wrong occurred: ' + err),
      complete: () => console.log('OBSERVER1 - done'),
    });
    console.log('just after subscribe');

    setTimeout(() => {
      this.observable.subscribe({
        next: x => console.log('OBSERVER2 -  got value ' + x),
        error: err => console.error('OBSERVER2 - something wrong occurred: ' + err),
        complete: () => console.log(' OBSERVER2 -  done'),
      });

    }, 10000);

  }

}
