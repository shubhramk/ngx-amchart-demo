import { Injectable } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
@Injectable()
export class AmchartService {

  constructor() { }

  /**
   * Set Config for different type of Charts
   */

  public setConfig(chart: any) {
    switch (chart.className) {
      case 'XYChart':
        chart.paddingRight = 20;
        chart.data = [];

        const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;

        const series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = 'date';
        series.dataFields.valueY = 'value';

        series.tooltipText = '{valueY.value}';
        chart.cursor = new am4charts.XYCursor();

        const scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;

        break;

      case 'PieChart':
        chart.data = [];
        const pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = 'litres';
        pieSeries.dataFields.category = 'country';
        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled  = true;
        break;
    }



  }
}
