import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component'

const routes: Routes = [
  { path: '', redirectTo: '/pie-chart', pathMatch: 'full' },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'bar-chart', component: BarChartComponent },
  //{ path: 'list-view', component: ListViewComponent }
];
