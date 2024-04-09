import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CardOneComponent } from './components/card-one/card-one.component';
import { ListSearchComponent } from './list-search.component';
import { ListSearchRoutes } from './list-search.routing';

@NgModule({
  imports: [CommonModule, IonicModule, ListSearchRoutes],
  declarations: [ListSearchComponent, CardOneComponent],
})
export class ListSearchModule {}
