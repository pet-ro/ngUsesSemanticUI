import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// **** alfa
import { AlfaHomeComponent} from './alfa/component/alfa-home/alfa-home.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full'},
   { path: 'home', component: AlfaHomeComponent},

];

@NgModule({
  imports:   [ RouterModule.forRoot(routes) ],
  exports:   [ RouterModule ],
  providers: [ ]
})
export class AppRoutingModule { }
