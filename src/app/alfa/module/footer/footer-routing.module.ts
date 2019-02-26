import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// routing to these components
import { ImpressumComponent} from './impressum/impressum.component'

const routes: Routes = [
  { path: 'impressum',
    component:  ImpressumComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterRoutingModule { }
