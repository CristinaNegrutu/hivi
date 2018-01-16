import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts/ng2-charts';

import {HiviService} from '../hivi.service';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnInit {

  constructor(public hiviService: HiviService) {
  }

  @ViewChild('myPieChart') chart: BaseChartDirective;

  public pieChartLabels: string[];
  public pieChartData: number[];
  public pieChartType: string;
  public pieChartOptions: any;

  ngOnInit(): void {
    this.hiviService.dumpBookmarks();

    this.pieChartLabels = this.hiviService.getPieChartsLabels();
    this.pieChartData = this.hiviService.getPieChartData();
    this.pieChartType = 'pie';
    this.pieChartOptions = {
      responsive: true
    }
  }

  public chartClicked(e: any): void {
    return;

  }

  public chartHovered(e: any): void {
    return;
  }

  public redrawChart(): void {
    if (localStorage.getItem("shouldRefreshChart") === "1") {
      // console.log("BarChartComponent: redrawChart() method call...");

      this.chart.chart.destroy();
      this.chart.chart = 0;

      this.chart.datasets = this.hiviService.getBarChartData();
      this.chart.labels = this.hiviService.getBarChartLabels();
      this.chart.ngOnInit();
      localStorage.setItem("shouldRefreshChart", "0");

    }
  }

}
