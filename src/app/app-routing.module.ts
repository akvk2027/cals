import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalsComponent } from './cals/cals.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path:'dashboard', component: DashboardComponent },
  { path:'nav', component: NavComponent },
  { path:'cals', component: CalsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
