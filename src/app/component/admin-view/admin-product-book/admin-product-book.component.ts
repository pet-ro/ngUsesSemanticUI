// 
//  
//   Template-driven form  to edit the data to a ProductBook object.
//  ====================
//

import { Component, OnInit, ViewChild } from '@angular/core';

// To embed the template-driven form via @ViewChild decorator 
// the class `NgForm` is required 
import { NgForm } from '@angular/forms';

import { FormErrorMessages} from './form-error-messages';

import { ProductBook } from '../../../model/type/product-book';
//
// use the ProductBookFactory method empty to initialize the class field productBook
import { ProductBookFactory } from '../../../service/product/product-book-factory';
// 
// use the ProductBookProviderService to save a ProductBook entry
import { ProductBookProviderService } from '../../../service/product/product-book-provider-service';



@Component({
  selector: 'bm-admin-product-book',
  templateUrl: './admin-product-book.component.html',
  styleUrls: ['./admin-product-book.component.css']
})

export class AdminProductBookComponent implements OnInit {
  
  // The `errors`object carries the error messages to the template 
  // 
  // `errors` is an object 
  // which is an array of key value pairs 
  // where key is string and value is also a string
  //
  // see also: 
  //   - Typescript array of key value pairs declaration
  //     https://stackoverflow.com/questions/36729643/typescript-array-of-key-value-pairs-declaration/36729729  
               
  errors : { [key: string] : string } = { };

  // init
  productBook = ProductBookFactory.empty();
  
  // In the template the tag `from` holds the element reference named `ProductBookForm`
  // 
  @ViewChild('ProductBookForm') productBookForm : NgForm;

  constructor(private productBookProvider: ProductBookProviderService) { }

  ngOnInit() {

    // subscribe to changes in the form
    this.productBookForm.statusChanges.subscribe(  () => this.updateFormErrorMessages() );
      
  }


  updateFormErrorMessages() {
    // ensure `errors` has its iniialisation value
    //        `errors` can hold an array of key values pairs
    //         init `errors` to an empty array of key value pairs
    this.errors = { };

    // check for each FormErrorMessage 

    for ( const message of FormErrorMessages) {

      // control is either title, key, published, or authors
      //
      // more about control: 
      //    https://angular.io/api/forms/FormControl
      //
      const control  = this.productBookForm.form.get( message.forControl);

      if ( 
        control 
        && control.dirty 
        && control.invalid
        //
        // Note: The control holds the property `errors`.
        //       `errors` contains an array of key-value pairs,
        //        short a `Map`.
        //        The keys are names for validators for this control.
        //        The names for validators are for example:
        //        required, minlength, maxlength, etc.
        //  
        //  The code
        //        control.errors[ message.forValidator ]
        //  means          
        //        Lookup wether the control poperty `errors`
        //        contains a key-value pair 
        //        with the key identical to  the value of 
        //        `forValidator` property of the  current message.
        // 
        //  see also: https://angular.io/api/forms/ValidationErrors 
        //
        && control.errors[ message.forValidator ]
        //   The code
        //      !this.errors[ message.forControl ] 
        //   means 
        //       Ensure that `this.errors` not already holds
        //       a key value pair whose key is the value of the `forControl` 
        //       property of the current message.
        &&   !this.errors[ message.forControl ] 
      ) {
        this.errors[ message.forControl ] = message.text;
      }

    }

  }

  submitForm() {
    
    // adapt form value of `authors` to type `ProductBook`
    this.productBook.authors =
       this.productBookForm.value.authors.split(';');

    
    // adapt form value of `thumbnail` to type `ProductBook`
    // 
    //     The form uses ngModelGroup to set for a `Thumbnail` object
    //     the two properties `url` and `title` 
    this.productBook.thumbnails =
        [ this.productBookForm.value.thumbnail ];


    const factoredProductBook = ProductBookFactory.fromObject( this.productBook );

    this.productBookProvider
        .create( factoredProductBook )
        .subscribe (
          res => {

            // reset the class member `productBook` as well as
            // the ProductBookForm.
            // 
            this.productBook = ProductBookFactory.empty();
            this.productBookForm.reset( ProductBookFactory.empty());

          }
        )


  } 
}
