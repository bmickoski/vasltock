import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums.component';

/**
 * Dashboard module routes
 */
const routes: Routes = [
  {
    component: AlbumsComponent,
    path: 'albums/:id',
  },
];

/**
 * Provides Dashboard module router
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule {}
