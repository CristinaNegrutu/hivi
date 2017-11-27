import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var require: any


@Component({
	selector: 'side-menu',
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  private logo = require("./assets/logo_with_text.png");

  constructor() {}

	ngOnInit(): void {

	}

	showSideMenu(): void {
    jQuery(".button-collapse").sideNav();
    jQuery('.button-collapse').sideNav('show');
		console.log("Menu button has been pressed.")
	}

}
