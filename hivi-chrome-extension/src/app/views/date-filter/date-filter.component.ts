import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {HiviService} from '../hivi.service';

@Component({
  selector: 'date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})

export class DateFilterComponent implements OnInit {
  constructor(public hiviService: HiviService) {
  }

  /*
    The value can be one of the following strings:
    TODAY, LAST_WEEK, LAST_MONTH, ALL_TIME
    */
  public selectedFilter: string = 'ALL_TIME';
  public shouldRefreshChart = true;

  @Output() notifyThatSelectedFilterChanged = new EventEmitter<string>();

  updateDataFilterValue(value: string): void {
    this.notifyThatSelectedFilterChanged.emit(this.selectedFilter);
    this.selectedFilter = value;
    this.hiviService.filterByInterval(value);
    this.shouldRefreshChart = true;
    localStorage.setItem("shouldRefreshChart", "1");
    console.log("DateFilterComponent, shouldRefreshChart = " + localStorage.getItem("shouldRefreshChart"));
  }

  ngOnInit() {
    document.getElementById("date-filter-box").style.backgroundColor = "white";
  }

}
