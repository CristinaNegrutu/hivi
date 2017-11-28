import {Component} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html'
})
export class ListViewComponent {

  createTree(): void {
    jQuery('.collapsible').collapsible();
  }

}
