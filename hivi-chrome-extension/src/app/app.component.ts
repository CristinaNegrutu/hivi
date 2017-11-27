import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

	whatToDisplay: string = "pie";

	notify(message):void {
		this.whatToDisplay = message;
	}

}
