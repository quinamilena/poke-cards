import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, IonicModule, HomeRoutes],
})
export class HomeModule {}
