import { Component, OnInit } from '@angular/core';

import { HiviService } from '../hivi.service';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {

	constructor(public hiviService: HiviService) {}

  public barChartOptions: any;
  public barChartLabels: string[];
  public barChartType: string;
  public barChartLegend: boolean;
  public barChartData: any[];

	ngOnInit(): void {
    this.hiviService.dumpBookmarks();

    this.barChartLabels = this.hiviService.getBarChartLabels();
		this.barChartData = this.hiviService.getBarChartData();
		this.barChartOptions = {
	    scaleShowVerticalLines: false,
	    responsive: true,
      barPercentage:1,
      scales: {
        xAxes: [{
          stacked: false,
          beginAtZero: true,
          scaleLabel: {
            labelString: 'Bookmarkss'
          },
          ticks: {
            stepSize: 1,
            min: 0,
            autoSkip: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }

	  };
		this.barChartType = 'bar';
		this.barChartLegend = true;
	}

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }




}
