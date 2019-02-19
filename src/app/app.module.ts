import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//  App uses Backend: via HTTP Methodes
import { HttpClientModule  } from '@angular/common/http'; 
//  App uses Routing
import { AppRoutingModule } from './app-routing.module';
// App uses template-driven forms
import { FormsModule } from '@angular/forms'

// THE APP
import { AppComponent } from './app.component';

//      Home
//      Home is a kind of main menu
import { HomeComponent } from './component/home/home.component';

//      Product page 
import { ProductPageComponent } from './component/product-page/product-page.component';
import { ProductProviderService } from './service/product/product-provider.service';
import { ProductListComponent } from './component/product-view/product-list/product-list.component';
import { ProductDetailsComponent } from './component/product-view/product-details/product-details.component';

// Reactive Programming
import { from } from 'rxjs';
import { PublisherComponent } from './demo/rx/publish-subscribe/publisher/publisher.component';
import { SubscriberComponent } from './demo/rx/publish-subscribe/subscriber/subscriber.component';
import { SearchComponent } from './component/search/search.component';

// Edit book entry
import { AdminPageComponent } from './component/admin-page/admin-page.component';
import { AdminProductBookComponent } from './component/admin-view/admin-product-book/admin-product-book.component';
import { LoginFormComponent } from './component/admin-view/login-form/login-form.component';
import { RegisterFormComponent } from './component/admin-view/register-form/register-form.component';



@NgModule({
  declarations: [
    AppComponent,
    // app-related
    AdminPageComponent,
    AdminProductBookComponent,
    // app-related
    HomeComponent,
    // app-related
    ProductPageComponent,
    ProductListComponent,
    ProductDetailsComponent,
    // app-related
    SearchComponent,
    // demo 
    PublisherComponent,
    SubscriberComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, // Note: HttpClientModule requires load after BrowserModul 
    AppRoutingModule,
    FormsModule,

  ],
  providers: [
    ProductProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
