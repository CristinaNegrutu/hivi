import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router'

import { SettingsComponent } from './settings.component';

const appRoutes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent
  },
];

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  ]
})
export class SettingsModule {
}
