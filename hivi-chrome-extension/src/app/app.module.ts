import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DataFiltersComponent } from './data-filters/data-filters.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MaterializeModule } from 'angular2-materialize';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
		SideMenuComponent,
    DataFiltersComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
		MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
