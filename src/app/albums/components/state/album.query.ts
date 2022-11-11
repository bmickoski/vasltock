import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AlbumStore, AlbumState } from './album.store';

@Injectable({ providedIn: 'root' })
export class AlbumQuery extends QueryEntity<AlbumState> {
  constructor(protected override store: AlbumStore) {
    super(store);
  }
}
