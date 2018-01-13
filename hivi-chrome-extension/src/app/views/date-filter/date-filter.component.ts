import { Component, ElementRef, EventEmitter, Output, OnInit } from '@angular/core';
import { HiviService } from '../hivi.service';

@Component({
	selector: 'date-filter',
	templateUrl: './date-filter.component.html',
	styleUrls: ['./date-filter.component.css']
})

export class DateFilterComponent implements OnInit {
  constructor(public hiviService: HiviService) {}

	/*
	The value can be one of the following strings:
	TODAY, LAST_WEEK, LAST_MONTH, ALL_TIME
	*/
	public selectedFilter: string = 'ALL_TIME';
	@Output() notifyThatSelectedFilterChanged = new EventEmitter<string>();

	updateDataFilterValue(value: string): void {
		this.selectedFilter = value;
		this.notifyThatSelectedFilterChanged.emit(this.selectedFilter);
		console.log("Filter value changed to " + this.selectedFilter);
    this.hiviService.filterByInterval(value)
	}

	ngOnInit() {
		document.getElementById("date-filter-box").style.backgroundColor = "white";
	}

}
