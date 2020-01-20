import { Component, OnInit } from '@angular/core';
import { ChartType } from './chart/amchart/charttype.enum';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'ngx-chart-demo';

  public data = [];
  public pieChartdata = [{
    country: 'Lithuania',
    litres: 300
  }, {
    country: 'Czechia',
    litres: 200
  }, {
    country: 'Ireland',
    litres: 500
  }, {
    country: 'Germany',
    litres: 325
  }, {
    country: 'Australia',
    litres: 200
  }];

  public chartType = ChartType;
  constructor() { }

  ngOnInit() {
    this.generateDummyData();
  }
  /**
   * Generate Dummy Data for Chart Data
   */
  private generateDummyData() {
    this.data = [];
    let visits = 10;
    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      this.data.push({
        date: new Date(2018, 0, i),
        name: 'name' + i,
        value: visits
      });
    }
  }



}
