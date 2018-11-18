import { Component, OnInit } from '@angular/core';
import { every, find } from 'rxjs/operators';
import * as Rx from 'rxjs';
import { Observable, Subscription, of, fromEvent } from 'rxjs';

@Component({
  selector: 'app-conditionals',
  templateUrl: './conditionals.component.html',
  styleUrls: ['./conditionals.component.css']
})
export class ConditionalsComponent implements OnInit {
  subscription: Subscription;
  observable: Observable<number>;

  constructor() {
  }

  ngOnInit() {
    this.conditionals();
  }

  conditionals() {
    const myBoolean = of(3, 2, 4, 1, 5, 9).pipe(every(x => x < 8));
    this.subscription = myBoolean.subscribe(x => console.log('Conditional: ' + x)); // -> false
/*
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(find((ev) => ev.target.tagName === 'HTML'));
    result.subscribe(x => console.log('HTML Clicked: ' + x));
    */
  }

}
