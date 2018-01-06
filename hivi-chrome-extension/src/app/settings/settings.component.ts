import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
	selector: 'settings',
	templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit  {

	constructor (@Inject(DOCUMENT) private document) { }

}
