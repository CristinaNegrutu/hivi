import { Component } from '@angular/core';

@Component({
	selector: 'views',
  templateUrl: './views.component.html',
})
export class ViewsComponent {

	whatToDisplay: string = "pie";

	notify(message):void {
		this.whatToDisplay = message;
	}

}
