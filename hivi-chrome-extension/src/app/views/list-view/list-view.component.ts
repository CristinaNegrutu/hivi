import {HostListener, Component, AfterViewInit} from '@angular/core';

declare var jQuery: any;
declare var TreeView: any;
declare var chrome;

@Component({
	selector: 'list-view',
	templateUrl: './list-view.component.html',

})
export class ListViewComponent implements AfterViewInit {

	constructor() {

	}

	@HostListener('document:click', ['$event'])
	onDocumentClick(event: MouseEvent) {
		this.createTree()
	}

	ngAfterViewInit() {
		this.dumpBookmarks()
	}

	createTree(): void {
		jQuery('.collapsible').collapsible();

	}

	dumpBookmarks(): void {

		// let dummyArray = JSON.parse(dummyData);
	 chrome.bookmarks.getTree((dummyArray)=>{

			//   function (dummyArray) {
			let domItem = 'bookmarks-list';
			this.expandTree(dummyArray[0], domItem);
			//
		});


	}

	expandTree(dummyArray, domItem): void {

		jQuery('#' + domItem).append('<ul class="collapsible" data-collapsible="accordion">');
		let i;

		let rootNodes = dummyArray.children;

		for (i = 0; i < rootNodes.length; i++) {

			jQuery('#' + domItem + ' ul').append(
				'  <li >\n' +
				'    <div class="collapsible-header grey lighten-2">\n' +
				'      <i class="material-icons">folder</i>' + dummyArray.children[i].title + '\n' +
				'    </div>\n'
			);
			let j;
			let currentArray = dummyArray.children[i].children;

			for (j = 0; j < currentArray.length; j++) {


				if (typeof currentArray[j].children == 'undefined') {
					jQuery('#' + domItem + ' ul li').append(
						'    <div class="collapsible-body">' +
						'       <a target="_blank" href="' + currentArray[j].url + '">' + dummyArray.children[i].children[j].title +
						'         </a>' +
						'    </div>\n'
					);

				}

			}

			jQuery('' + domItem + ' ul').append('  </li>');

		}

		jQuery('' + domItem).append('</ul>');
	}
}
