import { AlbumQuery } from './album.query';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Album } from './album.model';
import { AlbumStore } from './album.store';
import { Image } from 'src/app/models/image.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  constructor(private albumStore: AlbumStore) {}

  getAlbums() {
    const albumsArray = [];
    const albums = this.albumStore.getValue().entities;
    for (let album in albums) {
      albumsArray.push({
        id: albums[album].id,
        name: albums[album].name,
        images: albums[album].images,
      });
    }
    return albumsArray;
  }

  getAlbumById(id: number) {
    let images: Image[] = [];
    const albums = this.albumStore.getValue().entities;
    for (let album in albums) {
      if (albums[album].id === id) {
        images = albums[album].images;
      }
    }
    return images;
  }

  add(album: Album) {
    this.albumStore.add(album);
  }

  update(id: any, album: Partial<Album>) {
    this.albumStore.update(id, album);
  }

  remove(id: ID) {
    this.albumStore.remove(id);
  }
}
