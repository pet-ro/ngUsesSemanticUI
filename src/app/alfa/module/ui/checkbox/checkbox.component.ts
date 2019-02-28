import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';





@Component({
  selector: 'bm-checkbox',
  templateUrl: './checkbox.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit {

  // Input by DOM
   @Input()  label      : string;     // set from outside
   @Input()  checked    : boolean;    // set from outside
   // Output to DOM
   @Output() checkedEmitter =        // informs DOM,
          new EventEmitter<boolean>();
   //
   emitCheckedEvent( checked : boolean) {
     this.checkedEmitter.emit( checked );
   }

  constructor() { }

  ngOnInit() {
    this.label = "set from outside";
    this.checked = false;
  }

}
