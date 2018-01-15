import {Component, OnInit, ViewChild} from '@angular/core';
import {SimpleChanges} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
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
  public subscription: Subscription;

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

    this.subscription = this.filters.shouldRefreshChart
      .subscribe(data => {
        console.log("refresh");

        this.refresh();
      })
  }

  public refresh(): void {
    console.log("refresh");

    this.barChartData = this.hiviService.getBarChartData();
    this.barChartLabels = this.hiviService.getBarChartLabels();
    // this.chart.chart.refresh()
  }

  public chartClicked(e: any): void {
    console.log(e);
    var charta = this.chart; //Internal chart.js chart object
    console.log(charta);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
