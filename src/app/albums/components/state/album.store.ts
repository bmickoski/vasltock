import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Album } from './album.model';

export interface AlbumState extends EntityState<Album> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'albums' })
export class AlbumStore extends EntityStore<AlbumState> {
  constructor() {
    super();
  }
}
