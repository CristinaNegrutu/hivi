import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
	selector: 'settings',
	templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

	constructor (@Inject(DOCUMENT) private document) { }

	ngOnInit() {
		var settingsHeader = document.getElementById("settings-demo");
		var theme = localStorage.getItem("selectedTheme");
		if (theme == "DARK") {
			settingsHeader.style.color = "white";
			this.document.body.style.backgroundColor = "#2f4f4f";
		} else {
			settingsHeader.style.color = "black";
			this.document.body.style.backgroundColor = "white";
		}

	}

}
