import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/guards/auth.guard';
import { WorkspaceComponent } from './workspace/workspace.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        canActivate: [AuthGuard],
        component: WorkspaceComponent,
        children: [
          {
            canActivate: [AuthGuard],
            path: '',
            loadChildren: () =>
              import('./dashboard/dashboard.module').then(
                (mod) => mod.DashboardModule
              ),
          },
          {
            canActivate: [AuthGuard],
            path: '',
            loadChildren: () =>
              import('./albums/albums.module').then((mod) => mod.AlbumsModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
