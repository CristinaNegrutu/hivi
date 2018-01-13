import {Component, OnInit, ViewChild} from '@angular/core';
import { SimpleChanges } from '@angular/core';

import {HiviService} from '../hivi.service';
import {BaseChartDirective} from 'ng2-charts/ng2-charts';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor(public hiviService: HiviService) {
  }

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

  public refresh() {
    console.log("refresh")

    if (this.chart !== undefined) {
      this.chart.chart.destroy();
      this.chart.chart = 0;

      this.chart.datasets = this.hiviService.getBarChartData();
      this.chart.labels = this.hiviService.getBarChartLabels();
      this.chart.chart.refresh();
    }
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.chart.chart.initFlag) {
      // Check if the changes are in the data or datasets
      if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
        // Oliver, May 19th 17
        if (changes.hasOwnProperty('legend') ||
          changes.hasOwnProperty('colors') ||
          changes.hasOwnProperty('labels') ||
          changes.hasOwnProperty('options')) {
          this.refresh();
        } else /* Oliver, May 19th 17 */ if (changes['data']) {
          this.chart.chart.updateChartData(changes['data'].currentValue);
        } else {
          this.chart.chart.updateChartData(changes['datasets'].currentValue);
        }

        this.chart.chart.update();
      } else {
        // otherwise rebuild the chart
        this.refresh();
      }
    }
  }
}
