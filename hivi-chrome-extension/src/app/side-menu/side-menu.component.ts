import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
	selector: 'side-menu',
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

	constructor() {}

	ngOnInit(): void {

	}

	showSideMenu(): void {
		$(".button-collapse").sideNav();
		$('.button-collapse').sideNav('show');
		console.log("Menu button has been pressed.")
	}

}
