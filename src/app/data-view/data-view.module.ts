import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataViewRoutingModule } from './data-view-routing.module';
import { DataViewComponent } from './data-view.component';

@NgModule({
  imports: [
    CommonModule,
    DataViewRoutingModule
  ],
  declarations: [ DataViewComponent]
})
export class DataViewModule { }
