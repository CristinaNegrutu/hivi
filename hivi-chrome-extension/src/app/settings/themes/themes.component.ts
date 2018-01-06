import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'themes',
	templateUrl: './themes.component.html'
})
export class ThemesComponent {

	public changeTheme(value): void {
		localStorage.setItem("selectedTheme", value);
		console.log("Changed theme to \""+ value +"\".");
	}

}
