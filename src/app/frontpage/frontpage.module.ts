import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontpageRoutingModule } from './frontpage-routing.module';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { TextContainerComponent } from './containers/text-container/text-container.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [MainComponent, MenuComponent, TextContainerComponent, FooterComponent],
  imports: [
    CommonModule,
    FrontpageRoutingModule
  ]
})
export class FrontpageModule { }
