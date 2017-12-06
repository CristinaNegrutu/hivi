import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'date-filter',
	templateUrl: './date-filter.component.html',
	styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent {

	/*
	The value can be one of the following strings:
	TODAY, LAST_WEEK, LAST_MONTH, ALL_TIME
	*/
	public selectedFilter: string = 'TODAY';
	@Output() notifyThatSelectedFilterChanged = new EventEmitter<string>();

	updateDataFilterValue(value: string): void {
		this.selectedFilter = value;
		this.notifyThatSelectedFilterChanged.emit(this.selectedFilter);
		console.log("Filter value changed to " + this.selectedFilter);
	}

}
