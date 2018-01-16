import {Component, OnInit, ViewChild} from '@angular/core';
import {HiviService} from '../hivi.service';
import {DateFilterComponent} from '../date-filter/date-filter.component';
import {BaseChartDirective} from 'ng2-charts/ng2-charts';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {

  @ViewChild('myChart') chart: BaseChartDirective;

  constructor(public hiviService: HiviService,
              public filters: DateFilterComponent) {
  }

  public barChartOptions: any;
  public barChartLabels: string[];
  public barChartType: string;
  public barChartLegend: boolean;
  public barChartData: any[];
	public shouldRefreshChartDefault = localStorage.getItem("shouldRefreshChart")==="1";

  ngOnInit(): void {
    this.hiviService.dumpBookmarks();
    this.barChartLabels = this.hiviService.getBarChartLabels();
    this.barChartData = this.hiviService.getBarChartData();
    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      barPercentage: 1,
      scales: {
        xAxes: [{
          stacked: false,
          beginAtZero: true,
          scaleLabel: {
            labelString: 'Bookmarks'
          },
          ticks: {
            stepSize: 1,
            min: 0,
            autoSkip: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
    this.barChartType = 'bar';
    this.barChartLegend = true;
  }

	public redrawChart(): void {
		if (localStorage.getItem("shouldRefreshChart")==="1") {
			console.log("BarChartComponent: redrawChart() method call...");
			this.barChartData = this.hiviService.getBarChartData();
			this.barChartLabels = this.hiviService.getBarChartLabels();
      this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);

      this.chart.chart.update();
			localStorage.setItem("shouldRefreshChart", "0");
		}
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
