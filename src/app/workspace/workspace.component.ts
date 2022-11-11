import { Component, OnInit } from '@angular/core';
import { Album } from '../albums/components/state/album.model';
import { AlbumService } from '../albums/components/state/album.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  /**
   * Exisitng albums
   */
  albums: Album[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albums = this.albumService.getAlbums();
  }
}
