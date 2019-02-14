import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//  App uses Backend: via HTTP Methodes
import { HttpClientModule  } from '@angular/common/http'; 
//  App uses Routing
import { AppRoutingModule } from './app-routing.module';

// THE APP
import { AppComponent } from './app.component';

//  Views
//      Home is a kind of menu
import { HomeComponent } from './component/home/home.component';

//      Product page 
import { ProductPageComponent } from './component/product-page/product-page.component';
import { ProductProviderService } from './service/product-provider.service';
import { ProductListComponent } from './component/product-view/product-list/product-list.component';
import { ProductDetailsComponent } from './component/product-view/product-details/product-details.component';

// Reactive Programming
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductPageComponent,
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, // Note: HttpClientModule requires load after BrowserModul 
    AppRoutingModule,

  ],
  providers: [
    ProductProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
