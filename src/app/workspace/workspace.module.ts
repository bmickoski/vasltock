import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceComponent } from './workspace.component';

@NgModule({
  declarations: [WorkspaceComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [WorkspaceComponent],
})
export class WorkspaceModule {}
