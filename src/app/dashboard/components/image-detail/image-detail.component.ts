import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AlbumModalComponent } from 'src/app/albums/components/album-modal/album-modal.component';

import { DashboardService } from './../../services/dashboard.service';
import { Image } from './../../../models/image.model';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss'],
})
export class ImageDetailComponent {
  image!: Image;

  constructor(
    route: ActivatedRoute,
    private modalService: NgbModal,
    private dashboardService: DashboardService
  ) {
    const id = route.snapshot.paramMap.get('id');
    if (id) {
      this.getImageDetails(id);
    }
  }

  getImageDetails(id: string) {
    this.dashboardService.getImageDetails(id).subscribe((image: Image) => {
      this.image = image;
    });
  }

  downloadImage(width: string, height: string) {
    this.dashboardService.downloadImage(this.image, width, height);
  }

  addToAlbum() {
    const modalRef = this.modalService.open(AlbumModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.image = this.image;
    modalRef.result.then(
      () => {},
      () => {}
    );
  }
}
