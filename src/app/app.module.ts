import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//  App uses Backend: via HTTP Methodes
import { HttpClientModule  } from '@angular/common/http'; 
//  App uses Routing
import { AppRoutingModule } from './app-routing.module';

// Use either FormsModule or ReactiveFormsModule
//
// App uses template-driven forms
// import { FormsModule } from '@angular/forms'
// App uses reactive forms
import { ReactiveFormsModule } from '@angular/forms'
// end of "either FormsModule or ReactiveFormsModule"

//  -----------------------------------------   
// THE APP
import { AppComponent } from './app.component';
// 
//      Home
//      Home is a kind of main menu
import { HomeComponent } from './component/home/home.component';
// 
//      Product page 
import { ProductPageComponent } from './component/product-page/product-page.component';
import { ProductProviderService } from './service/product/product-provider.service';
import { ProductListComponent } from './component/product-view/product-list/product-list.component';
import { ProductDetailsComponent } from './component/product-view/product-details/product-details.component';

// Reactive Programming
import { from } from 'rxjs';
import { SearchComponent } from './component/search/search.component';
// import { DemoModule } from './demo/demo.module'
 
// Admin Module
import { AdminPageComponent } from './module/admin/admin-page.component';
// Admin Module 
import { AdminModule } from './module/admin/admin.module';



@NgModule({
  declarations: [
    AppComponent,
    // app-related
    HomeComponent,
    // app-related
    ProductPageComponent,
    ProductListComponent,
    ProductDetailsComponent,
    // app-related
    SearchComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, // Note: HttpClientModule requires load after BrowserModul 
    AppRoutingModule,
    // 
    AdminModule, 

  ],
  providers: [
    ProductProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
