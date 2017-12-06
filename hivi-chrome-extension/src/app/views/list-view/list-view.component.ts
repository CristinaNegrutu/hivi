import {HostListener, Component, AfterViewInit} from '@angular/core';

declare var jQuery: any;
declare var chrome;

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html'
})
export class ListViewComponent implements AfterViewInit {
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
    let dummyArray = chrome.bookmarks.getTree(
      function (dummyArray) {

        let i;

        jQuery('#bookmarks-list').append('<ul class="collapsible" data-collapsible="accordion">');

        for (i = 0; i < dummyArray[0].children.length; i++) {

          jQuery('#bookmarks-list ul').append(
            '  <li class="bookmark-list-item">\n' +
            '    <div class="collapsible-header grey lighten-2">\n' +
            '      <i class="material-icons">folder</i>' + dummyArray[0].children[i].title + '\n' +
            '    </div>\n'
          );

          let j;

          for (j = 0; j < dummyArray[0].children[i].children.length; j++) {

            if (typeof dummyArray[0].children[i].children[j].title !== 'undefined') {
              jQuery('#bookmarks-list ul .bookmark-list-item').append(
                '    <div class="collapsible-body"><p>' + dummyArray[0].children[i].children[j].title + '</p></div>\n'
              );
            }
          }

          jQuery('#bookmarks-list ul').append('  </li>');

        }

        jQuery('#bookmarks-list').append('</ul>');
      });

  }

}
