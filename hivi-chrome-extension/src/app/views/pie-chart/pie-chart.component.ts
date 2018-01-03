import { Component, OnInit } from '@angular/core';

import { HiviService } from '../hivi.service';

@Component({
	selector: 'pie-chart',
	templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnInit {

	constructor(public hiviService: HiviService) {}

	public pieChartLabels: string[];
	public pieChartData: number[];
	public pieChartType: string;

	ngOnInit(): void {
    this.hiviService.dumpBookmarks();

    this.pieChartLabels = this.hiviService.getPieChartsLabels();
		this.pieChartData = this.hiviService.getPieChartData();
		this.pieChartType = 'pie';
	}

	public chartClicked(e:any):void {
		console.log(e);
	}

	public chartHovered(e:any):void {
		console.log(e);
	}

}
