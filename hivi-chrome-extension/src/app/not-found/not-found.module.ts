import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule, Routes } from '@angular/router'

import { NotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  {
    path: 'page-not-found',
    component: NotFoundComponent
  },
];

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  ]
})
export class NotFoundModule {
}
