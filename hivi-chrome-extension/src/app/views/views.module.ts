import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { ViewsComponent } from './views.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DataFiltersComponent } from './data-filters/data-filters.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MaterializeModule } from 'angular2-materialize';
import { BarChartComponent } from './bar-chart/bar-chart.component'
import { RouterModule, Routes } from '@angular/router'

import { HiviService } from './hivi.service';

const appRoutes: Routes = [
  {
    path: '**',
    redirectTo: '/settings'
	},
  {
    path: 'views',
    component: ViewsComponent
  },
];

@NgModule({
  declarations: [
    SideMenuComponent,
    DataFiltersComponent,
    PieChartComponent,
    BarChartComponent,
		ViewsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HiviService
  ]
})
export class ViewsModule {
}
