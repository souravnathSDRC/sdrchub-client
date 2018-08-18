import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataEntryModule } from './data-entry/data-entry.module';
import { DataViewModule } from './data-view/data-view.module'
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: 'entry',
  loadChildren: './data-entry/data-entry.module#DataEntryModule',
  pathMatch: 'full',
  canActivate: [AuthGuard]
  },
  {
  path: 'view',
  loadChildren: './data-view/data-view.module#DataViewModule',
  pathMatch: 'full',
  canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
