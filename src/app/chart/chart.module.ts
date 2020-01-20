import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmchartDirective } from './amchart/amchart.directive';
import { AmchartService } from './amchart/amchart.service';


@NgModule({
  declarations: [AmchartDirective],
  imports: [
    CommonModule
  ],
  exports: [
    AmchartDirective
  ],
  providers: [AmchartService]
})
export class ChartModule { }
