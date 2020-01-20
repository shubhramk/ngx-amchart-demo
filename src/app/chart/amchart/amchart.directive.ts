import { OnInit, OnDestroy, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import { AmchartService } from './amchart.service';

am4core.useTheme(am4themes_animated);

@Directive({
  selector: '[appAmchart]'
})
export class AmchartDirective implements OnInit, OnDestroy, OnChanges {

  @Input() appAmchart;
  @Input() data: Array<any> = [];

  private chart: any = null;
  constructor(
    private elmRef: ElementRef,
    private amChartService: AmchartService) {
  }

  ngOnInit() {
    this.createChart();
  }
  ngOnChanges(changes: SimpleChanges) {
    const data = changes.data;
    if (data.currentValue !== data.previousValue) {
      this.updateChart();
    }
  }

  ngOnDestroy() {
    this.destroyChart();
  }

  /**
   * Create Chart
   */
  private createChart() {
    this.destroyChart();
    const chart = am4core.create(this.elmRef.nativeElement, am4charts[this.appAmchart
    ]);
    this.amChartService.setConfig(chart);
    this.chart = chart;
    this.chart.data = this.data;
  }

  /**
   * Update Chart Data
   */
  private updateChart() {
    if (this.chart) {
      this.chart.data = this.data;
      this.chart.invalidateData();
    } else {
      this.createChart();
    }
  }

  /**
   * Destroy Chart
   */
  private destroyChart() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  }

}
