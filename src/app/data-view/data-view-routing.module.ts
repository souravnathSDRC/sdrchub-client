import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataViewComponent } from './data-view.component';

const routes: Routes = [{
  path: '',
  component: DataViewComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataViewRoutingModule { }
