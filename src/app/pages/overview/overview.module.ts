import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { SharedModule } from '../../shared/shared.module';
import { BalanceCardComponent } from './components/total-balance-card/balance-card.component';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { SliderFooterComponent } from './components/slider-footer/slider-footer.component';

@NgModule({
  declarations: [
    OverviewComponent,
    BalanceCardComponent,
    AccountCardComponent,
    SliderFooterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    OverviewComponent,
  ],
})
export class OverviewModule { }
