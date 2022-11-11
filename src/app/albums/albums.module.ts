import { AlbumsRoutingModule } from './albums-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AlbumsComponent } from './albums.component';
import { AlbumModalComponent } from './components/album-modal/album-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlbumsComponent, AlbumModalComponent],
  imports: [CommonModule, FormsModule, NgbModule, AlbumsRoutingModule],
})
export class AlbumsModule {}
