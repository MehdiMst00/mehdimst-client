import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioItemsRoutingModule } from './portfolio-items-routing.module';
import { PortfolioItemsComponent } from './portfolio-items.component';

@NgModule({
  declarations: [PortfolioItemsComponent],
  imports: [CommonModule, PortfolioItemsRoutingModule],
})
export class PortfolioItemsModule {}
