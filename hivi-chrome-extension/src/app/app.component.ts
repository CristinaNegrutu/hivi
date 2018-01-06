import { Component, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
	styleUrls:[]
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent {

	constructor (@Inject(DOCUMENT) private document) { }

	ngOnInit() {
		var theme = localStorage.getItem("selectedTheme");
		console.log("New theme is " + theme + ".");

		if (theme == "DARK") {
			this.document.body.style.backgroundColor="#2f4f4f";
		} else {
			this.document.body.style.backgroundColor="white";
		}
	}

}
