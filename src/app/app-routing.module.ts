import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { DynamicPortsComponent } from './dynamic-ports/dynamic-ports.component';

const appRoutes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'orgchart', component: OrgChartComponent },
  { path: 'dynamicports', component: DynamicPortsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
