import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//  App uses Backend: via HTTP Methodes
import { HttpClientModule  } from '@angular/common/http';

//  App configures its routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Reactive Programming
import { from } from 'rxjs';


import { AlfaHomeComponent } from './alfa/component/alfa-home/alfa-home.component';
import { AlfaHomePresentationComponent } from './alfa/component/alfa-home-presentation/alfa-home-presentation.component';
import { FooterModule } from './alfa/module/footer/footer.module';
import { UiModule } from './alfa/module/ui/ui.module';
import { ModelModule } from './alfa/model/model.module';
import { AdminFormsModule } from './alfa/module/admin-forms/admin-forms.module';

@NgModule({
  declarations: [
    AppComponent,
    // **** alfa
    AlfaHomeComponent,
    AlfaHomePresentationComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, // Note: HttpClientModule requires load after BrowserModul
    // ***  root 
    AppRoutingModule,
    // 
    // **** alfa 
    FooterModule,
    ModelModule,
    AdminFormsModule, 
  
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
