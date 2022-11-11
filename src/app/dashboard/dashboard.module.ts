import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { ImageListComponent } from './components/image-list/image-list.component';

@NgModule({
  declarations: [DashboardComponent, ImageDetailComponent, ImageListComponent],
  imports: [CommonModule, DashboardRoutingModule, NgbModule, ScrollingModule, InfiniteScrollModule],
})
export class DashboardModule {}
