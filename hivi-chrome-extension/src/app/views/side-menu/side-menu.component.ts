import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

declare var jQuery: any;
declare var require: any;


@Component({
	selector: 'side-menu',
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

	constructor(private elementRef:ElementRef) {}

  private logo = require("./assets/logo_with_text.png");
	@Output() notifyThatSideMenuChanged = new EventEmitter<string>();

	showSideMenu(): void {
		jQuery(this.elementRef.nativeElement).find('.a-collapse').sideNav();
		jQuery(this.elementRef.nativeElement).find('.a-collapse').sideNav('show');
		console.log("Menu button has been pressed.")
	}

	displayListView(): void {
		this.notifyThatSideMenuChanged.emit("list");
		console.log("Pressed the list button.");
	}

	displayPieChart(): void {
		this.notifyThatSideMenuChanged.emit("pie");
		console.log("Pressed the pie button.");
	}

	displayBarChart(): void {
		this.notifyThatSideMenuChanged.emit("bar");
		console.log("Pressed the bar button.");
	}

}
