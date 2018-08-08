import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataEntryModule } from './data-entry/data-entry.module';
import { DataViewModule } from './data-view/data-view.module'

const routes: Routes = [{
  path: 'data',
  loadChildren: './data-entry/data-entry.module#DataEntryModule',
},
{
  path: 'data-view',
  loadChildren: './data-view/data-view.module#DataViewModule',
},
{
  path: '',
  loadChildren: './home/home.module#HomeModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
