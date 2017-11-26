import { Component, OnInit, ElementRef } from '@angular/core';
// import * as $ from 'jquery';

declare var jQuery: any;

@Component({
	selector: 'side-menu',
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

	constructor(private elementRef:ElementRef) {}

  private logo = require("./assets/logo_with_text.png");

	ngOnInit(): void {

	}

	showSideMenu(): void {
		jQuery(this.elementRef.nativeElement).find('.button-collapse').sideNav();
		jQuery(this.elementRef.nativeElement).find('.button-collapse').sideNav('show');
		console.log("Menu button has been pressed.")
	}

}
