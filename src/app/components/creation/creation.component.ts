import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer, of, from, interval, fromEvent, pipe, defer, EMPTY} from 'rxjs';
import { take, tap, multicast, mapTo, repeat, retry, startWith} from 'rxjs/operators';

import * as Rx from 'rxjs';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.errors();
    // this.unsubscribe();
    // this.timer();
    // this.repeats();
    // this.retries();
    // this.defer();
    this.empty();
  }

  errors() {
    const observable = Rx.Observable.create((observer) => {
      observer.next('Lets send the value 100');
      observer.next(100);
      observer.next('then lets throw errow');
      observer.error('Error: Observer has an error...');

    });

    observable.subscribe(
      value => console.log(value),
      err => console.log(err),
      () => console.log('complete')
    );
  }

  unsubscribe() {
    const observable = Rx.Observable.create(observer => {
      const id = setTimeout(() => observer.next('Van Halen'), 5000);
      return () => { clearTimeout(id); console.log('clear timeout!'); };
    });

    const subscription1 = observable.subscribe(val => console.log('subscription1: ' + val));
    setTimeout(() => subscription1.unsubscribe(), 20000);

    const subscription2 = observable.subscribe(val => console.log('subscription2: ' + val));
    setTimeout(() => subscription2.unsubscribe(), 30000);
  }

  timer() {
    const numbers1 = timer(5000, 1000);
    const subscription = numbers1.subscribe(x => console.log('numbers1: ' + x));
    setTimeout(() => subscription.unsubscribe(), 10000);

     const numbers2 = timer(12000);
     numbers2.subscribe(x => console.log('numbers2; ' + x));
  }

  repeats() {
    const primes = of(3, 5, 7, 13);
    const repeatedPrimes = primes.pipe(repeat(4));
    repeatedPrimes.subscribe(x => console.log('repeated primes: ' + x));
  }

  retries() {
    const evens = of(2, 4, 6, 8);
    const retryEvens = evens.pipe(retry(3));
    retryEvens.subscribe(x => console.log('retryEvens: ' + x));
  }

  defer() {
    const clicksOrInterval = defer(function (): Observable<any> {
      return Math.random() > 0.5
        ? fromEvent(document, 'click')
        : interval(1000);
    });

    clicksOrInterval.subscribe(x => console.log('defered: ' + JSON.stringify(x)));
  }

  empty() {
    const result = EMPTY.pipe(startWith(5));
    result.subscribe(x => console.log(x));
  }
}
