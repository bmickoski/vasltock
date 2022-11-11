import { AlbumService } from './../state/album.service';
import { Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Image } from './../../../models/image.model';
import { AlbumState } from './../../models/album-modal-state.enum';
import { Album } from '../state/album.model';

@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.component.html',
  styleUrls: ['./album-modal.component.scss'],
})
export class AlbumModalComponent implements OnInit {
  /**
   * Image object
   */
  @Input()
  image!: Image;

  /**
   * Exisitng albums
   */
  albums: Album[] = [];

  /**
   * New album name
   */
  albumName!: string;

  /**
   * New album name
   */
  selectedAlbums: Album[] = [];

  /**
   * Album state, can be  CreateNewAlbum or AddToExisting
   */
  public AlbumState = AlbumState;

  /**
   * Album active state
   */
  public state?: AlbumState = AlbumState.CreateNewAlbum;

  constructor(
    public activeModal: NgbActiveModal,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albums = this.albumService.getAlbums();
  }

  /**
   * Set state value
   *
   * @param state new State value
   * @protected
   */
  protected setState(state: AlbumState): void {
    this.state = state;
  }

  createAlbum() {
    if (this.state === AlbumState.CreateNewAlbum) {
      const album: Album = {
        id: Math.round(Math.random() * 1000),
        name: this.albumName,
        images: [this.image],
      };
      this.albumService.add(album);
    } else {
    }
  }

  addToSelected(selectedAlbum: Album) {
    if (this.selectedAlbums.length <= 0) {
      this.selectedAlbums.push(selectedAlbum);
    } else {
      const index = this.selectedAlbums.findIndex(
        (album) => album.id === selectedAlbum.id
      );

      if (index > -1) {
        this.selectedAlbums.splice(index, 1);
      } else {
        this.selectedAlbums.push(selectedAlbum);
      }
    }
  }

  checkIfSelected(selectedAlbum: Album) {
    return this.selectedAlbums.find((album) => album.id === selectedAlbum.id);
  }
}
