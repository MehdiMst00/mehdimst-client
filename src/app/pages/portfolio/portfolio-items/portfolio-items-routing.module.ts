import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioItemsComponent } from './portfolio-items.component';

const routes: Routes = [{ path: '', component: PortfolioItemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioItemsRoutingModule {}
