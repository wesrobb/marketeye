import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MarketEyeComponent }  from './marketeye.component';
import { ChartComponent }  from './chart.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ MarketEyeComponent, ChartComponent ],
  bootstrap:    [ MarketEyeComponent ]
})
export class AppModule { }
