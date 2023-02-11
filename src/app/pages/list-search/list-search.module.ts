import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ListSearchComponent } from './list-search.component';
import { ListSearchRoutes } from './list-search.routing';

@NgModule({
  imports: [CommonModule, IonicModule, ListSearchRoutes],
  declarations: [ListSearchComponent],
})
export class ListSearchModule {}
