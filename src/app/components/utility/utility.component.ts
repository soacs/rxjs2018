
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, from, Subscription, of} from 'rxjs';
import {interval, merge, pipe} from 'rxjs';
import {filter, map, materialize, take} from 'rxjs/operators';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css']
})
export class UtilityComponent implements OnInit {

  letters: Observable<any>
  constructor() {
    console.log('ENTER UtilityComponent Constructor');
    console.log('EXIT UtilityComponent Constructtor');
  }

  ngOnInit() {
    this.materialize();
  }

  materialize() {
    this.letters = of('a', 'b', 13, 'd');
    const upperCase = this.letters.pipe(map(x => x.toUpperCase()));
    const materialized = upperCase.pipe(materialize());
    materialized.subscribe(x => console.log('Materialized: ' + x));

  }

}
