import { Component, OnInit, EventEmitter } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap , tap  } from 'rxjs/operators';


import { ProductBookProviderService } from 'src/app/service/product/product-book-provider-service';
import { ProductBook } from 'src/app/model/type/product-book';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  isLoading : boolean = false;

  searchResult : ProductBook[];

  searchTermPublisher = new EventEmitter<string>();


  constructor( private productBookProvider : ProductBookProviderService) { }

  ngOnInit() {

    // switchMap   changes type of the objects the publisher emits
    //   outer  searchTerm    --- type string
    //   inner searchResult   --- type ProductBook[]
    this.searchTermPublisher
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap( () => this.isLoading == true ),
        switchMap( searchTerm => 
          this.productBookProvider
          .getAllSearch( searchTerm )),
        tap( () => this.isLoading == true )  
      ).subscribe( searchResult => this.searchResult = searchResult )
       

    
  }

}
