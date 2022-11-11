import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Album } from './components/state/album.model';
import { AlbumService } from './components/state/album.service';
import { Image } from './../models/image.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  /**
   * Exisitng albums
   */
  images: Image[] = [];
  constructor(route: ActivatedRoute, private albumService: AlbumService) {
    const id = route.snapshot.paramMap.get('id');
    if (id) {
      this.getAlbumById(id);
    }
  }

  ngOnInit(): void {
    // this.albums = this.albumService.getAlbums();
  }

  getAlbumById(id: string) {
    const integerId = parseInt(id);
    this.images = this.albumService.getAlbumById(integerId);
  }
}
