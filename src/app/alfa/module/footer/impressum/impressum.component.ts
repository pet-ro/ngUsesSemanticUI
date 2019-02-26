import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.css']
})
export class ImpressumComponent implements OnInit {

  constructor() { }

  public company  : string; 
  public street   : string;
  public town     : string;
  public director : string;
  public court    : string;
  public taxId    : string;
  public phone    : string;
  public webaddress  : string;
  public email    : string;
  //
  public artworkBy        : string;
  public implementationBy : string;
  public copyright        : string;


  ngOnInit() {
    this.company  = "Alfa GnbH";
    this.street   = "Angular Str. 29";
    this.town     = "5564  Google / Germany";
    this.director = "Fred  Feuerstein";
    this.court    = "Ulm HRB 4722XX";
    this.taxId    = "123-345-34";
    this.phone    = "++49 (0) 71 - 234- 234";
    this.webaddress   = "wwww.g-shirt.de";
    this.email    = "kontakt@g-shirt.de";
    //
    this.artworkBy        = "Peter Robisch";
    this.implementationBy = "pet-ro@art-works";
    this.copyright        = " Inhalt ©2019 by pet-ro@art-works / Germany"; 
  }

}
