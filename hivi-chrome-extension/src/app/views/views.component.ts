import {Component, OnInit} from '@angular/core';

import {ExcludedDomainsService} from '../settings/excluded-domains/excluded-domains.service';
import {DateFilterComponent} from '../views/date-filter/date-filter.component';

@Component({
  selector: 'views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  public whatViewToDisplay: string = "pie";
  public selectedFilter: string = "TODAY";
  public excludedDomains: string[];

  constructor(private domainsService: ExcludedDomainsService,
              public filters: DateFilterComponent) {
  }

  ngOnInit() {
    this.getExcludedDomains();
    console.log("ViewsComponent: excludedDomains = " + this.excludedDomains);
  }

  getExcludedDomains(): void {
    this.domainsService.getExcludedDomains()
      .subscribe(results => this.excludedDomains = results);
  }

  updateAfterSideMenuSelectionChanged(sideMenuSelectionValue): void {
    this.whatViewToDisplay = sideMenuSelectionValue;
    console.log("ViewsComponent: what to display = " + this.whatViewToDisplay);
    this.filters.selectedFilter = 'ALL_TIME';
  }

  updateAfterDateFilterValueChanged(dateFilterValue): void {
    this.selectedFilter = dateFilterValue;
    console.log("ViewsComponent: selected filter = " + this.selectedFilter);
  }

  downloadCanvasAsPNG(event) {
    var anchor = event.target;
    anchor.href = document.getElementsByTagName('canvas')[0].toDataURL();
    anchor.download = "image.png";
  }

  /*
    JPEG format does not suport fully-transparent background, so the canvas must
    be filled with a color in order to download as JPEG.
    */
  downloadCanvasAsJPEG(event) {
    var anchor = event.target;
    var canvas = document.getElementsByTagName('canvas')[0];
    var canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = 'rgba(255,255,255, 0.3)';
    canvasContext.fillRect(0, 0, canvas.width * 2, canvas.height * 2);
    anchor.href = document.getElementsByTagName('canvas')[0].toDataURL("image/jpeg");
    anchor.download = "image.jpeg";
  }

}
