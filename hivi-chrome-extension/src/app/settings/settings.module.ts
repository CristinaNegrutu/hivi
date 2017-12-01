import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router'

import { SettingsComponent } from './settings.component';
import { ExcludedDomainsComponent } from './excluded-domains/excluded-domains.component';
import { ThemesComponent  } from './themes/themes.component';

import { ExcludedDomainsService } from './excluded-domains/excluded-domains.service';

declare var require: any;

const appRoutes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent
  },
];

@NgModule({
  declarations: [
    SettingsComponent,
		ExcludedDomainsComponent,
		ThemesComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
		ExcludedDomainsService
  ]
})
export class SettingsModule {

  // public logo = require("./assets/logo_with_text.png");
  // // public dark_theme = require("./assets/dark.png");
  // // public light_theme = require("./assets/light.png");
  // light_theme:any = require("./assets/dark.png");
  // dark_theme:any =  require("./assets/light.png");

}
