import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ViewsModule } from './views/views.module';
import { SettingsModule } from './settings/settings.module';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { ViewsComponent } from './views/views.component';
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/views',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

		ViewsModule,
		SettingsModule,

    BrowserModule,
    ChartsModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
