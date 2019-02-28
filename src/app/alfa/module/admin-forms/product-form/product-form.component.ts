import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
//
import { ProductItemProviderService } from '../../../model/service/product-item-provider.service';
import { ProductItemFactory } from '../../../model/service/product-item-factory';
import { ProductItem, Thumbnail } from '../../../model/type/product-item';
import { ProductFormErrorMessages} from './product-form-error-messages';


@Component({
  selector: 'bm-product-form',
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ProductFormComponent implements OnInit {

  @ViewChild('myForm') myForm: NgForm;

  product: ProductItem;
  errors: { [key: string]: string } = {};

  constructor(
    private productItemProvider: ProductItemProviderService
  ) { }

  ngOnInit() {
    this.product = ProductItemFactory.empty();
    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of ProductFormErrorMessages) {
      console.log(message.forControl);
      console.log(message.forValidator);
      console.log(message.text);
      const control = this.myForm.form.get(message.forControl);
      if (control &&
        control.dirty &&
        control.invalid &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

  submitForm() {
    this.product.shortDescriptions = [ this.myForm.value.shortDescriptions ];
    this.product.descriptions = [ this.myForm.value.descriptions ];
    this.product.thumbnails = [ this.myForm.value.thumbnail ];

    const book = ProductItemFactory.fromObject(this.product);

    this.productItemProvider.create(book).subscribe( 
      res => {
          this.product = ProductItemFactory.empty();
          this.myForm.reset(ProductItemFactory.empty()); }
    );
  }
}

/*





}


*/