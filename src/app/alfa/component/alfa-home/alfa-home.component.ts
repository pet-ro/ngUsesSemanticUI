import { Component, OnInit, ViewEncapsulation } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router'; 
 import { BootstrapInfoComponent } from '../bootstrap-info/bootstrap-info.component'

@Component({
  selector: 'bm-alfa-home',
  templateUrl: './alfa-home.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AlfaHomeComponent implements OnInit {

  enablePresentation  : boolean;
  enableImpressum     : boolean;
  enableBootstrapInfo : boolean;

  title = 'alfa (Produkte & Dienstleistung)';

  constructor( 
    private activatedRoute : ActivatedRoute, 
    ) { }

  ngOnInit() {

    this.enablePresentation  = true;
    this.enableImpressum     = false;
    this.enableBootstrapInfo = false;
  }

  viewImpressum() {
    this.enablePresentation  = false;
    this.enableImpressum     = true;
    this.enableBootstrapInfo = false;
  }

  viewPresentation() {
    this.enablePresentation  = true;
    this.enableImpressum     = false;
    this.enableBootstrapInfo = false; 
  }

  viewBootstrapInfo() {
    this.enablePresentation  = false;
    this.enableImpressum     = false;
    this.enableBootstrapInfo = true; 
  }

}
