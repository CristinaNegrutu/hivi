import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts';

import {AppComponent} from './app.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {DataFiltersComponent} from './data-filters/data-filters.component';
import {MainContentComponent} from './main-content/main-content.component';
import {MaterializeModule} from 'angular2-materialize';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {BarChartComponent} from './bar-chart/bar-chart.component'
import {SettingsComponent} from './settings/settings.component'
import {RouterModule, Routes} from '@angular/router'

import {HiviService} from './hivi.service';


const appRoutes: Routes = [
  {path: 'settings', component: SettingsComponent},
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    DataFiltersComponent,
    MainContentComponent,
    PieChartComponent,
    BarChartComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    MaterializeModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [
    HiviService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}



