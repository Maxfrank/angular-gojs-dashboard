import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrgChartComponent } from './orgChart/orgChart.component';
import { DynamicPortsComponent } from './dynamicPorts/dynamicPorts.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'orgchart', component: OrgChartComponent },
  { path: 'dynamicports', component: DynamicPortsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
