import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bm-publisher',
  template: '<button (click)="publishInfo()">click to publish new info</button>'
})
export class PublisherComponent implements OnInit {
  
  counter : number;

  @Output() numberEventPublisher = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.counter = 0;

  }

  publishCounter() {
    this.numberEventPublisher.emit( this.counter++ );
  }

}
