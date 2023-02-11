import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ListTypesComponent } from './list-types.component';

@NgModule({
  declarations: [ListTypesComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: ListTypesComponent }]),
  ],
})
export class ListTypesModule {}
