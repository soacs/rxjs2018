import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';

  constructor() {



  }

  ngInit() [
  var observable = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  });
  observable.subscribe(
    value => console.log("First subscribe value: " + value),
  err => {},
() => console.log('this is the end')
);
    ]
}
