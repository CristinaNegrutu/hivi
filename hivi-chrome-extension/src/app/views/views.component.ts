import { Component } from '@angular/core';

@Component({
	selector: 'views',
  templateUrl: './views.component.html',
	styleUrls: ['./views.component.css']
})
export class ViewsComponent {

	whatToDisplay: string = "pie";

	notify(message):void {
		this.whatToDisplay = message;
	}

	downloadCanvasAsPNG(event) {
    var anchor = event.target;
    anchor.href = document.getElementsByTagName('canvas')[0].toDataURL();
    anchor.download = "test.png";
  }

	downloadCanvasAsSVG(event) {
    var anchor = event.target;
    anchor.href = document.getElementsByTagName('canvas')[0].toDataURL();
    anchor.download = "test.svg";
  }

}
