import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { DashboardComponent } from './dashboard.component';

/**
 * Dashboard module routes
 */
const routes: Routes = [
  {
    component: DashboardComponent,
    path: '',
    children: [
      {
        component: ImageListComponent,
        path: 'dashboard',
      },
      {
        component: ImageListComponent,
        path: '',
      },
      {
        component: ImageDetailComponent,
        path: 'dashboard/:id',
        pathMatch: 'full',
      },
    ],
  },
];

/**
 * Provides Dashboard module router
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
