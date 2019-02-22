import { Component, OnInit } from '@angular/core';

// uses ActivatedRoute and Router to be able to read routing parameters
import { ActivatedRoute, Router } from  '@angular/router';

// ensure `app.module.ts` imports ReactiveFormModul
//
// use from '@angular/forms'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

// to support the edit of book entries
// we require:

import { ProductBook } from '../../../model/type/product-book';
import { ProductBookFactory } from '../../../service/product/product-book-factory';
import { ProductBookProviderService } from '../../../service/product/product-book-provider-service';

// provide apppropriate FormErrorMessages
import { FormErrorMessages } from '../../../form/product-book/form-error-messages';

@Component({
  selector: 'bm-admin-reactive-product-book',
  templateUrl: './admin-reactive-product-book.component.html',
  styleUrls: ['./admin-reactive-product-book.component.css']
})
export class AdminReactiveProductBookComponent implements OnInit {

  // The `productDoook` object carries the properties of the type `ProductBook` to the template. 
  productBook     : ProductBook  = ProductBookFactory.empty();
  productBookForm : FormGroup   // use method `initProductBookForm()` to  initialises the Produc 
 
  // The `errors` object carries the error messages to the template 
  // The key is name of  control,
  // its value is a value of the property `text` of a type `FormErrorMessages`.
  // set by the method `updateErrorMessages().

  errors: {
        [key : string] : string
  } = { }

  isUpdating : boolean = false;



  constructor() { }

  ngOnInit() {
  }

}
