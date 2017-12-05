import {Component} from '@angular/core';

declare var jQuery: any;
declare var chrome;


@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html'
})
export class ListViewComponent {

  createTree(): void {
    jQuery('.collapsible').collapsible();
  }

  dumpBookmarks(): void {
    let bookmarkTreeNodes = chrome.bookmarks.getTree(
      function (bookmarkTreeNodes) {
        console.log(bookmarkTreeNodes);
      });
    console.log(bookmarkTreeNodes);
  }

}
