import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  constructor() {
    console.log('ENTER AsyncComponent Constructor');
    console.log('EXIT AsyncComponent Constructtor');
  }

  ngOnInit() {
  }

}
