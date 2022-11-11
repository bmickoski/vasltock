import { Router } from '@angular/router';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent implements OnInit {
  @Input()
  limit: number = 30;

  currentPage: number = 0;

  images!: Image[];

  isLoading: boolean = false;

  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadData(this.currentPage, this.limit);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    //In chrome and some browser scroll is given to body tag
    let pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if (pos == max) {
      console.log('end');
      if (!this.isLoading) {
        this.currentPage += 1;

        this.loadData(this.currentPage, this.limit);
      }
    }
  }

  onScroll(event: any) {
    // visible height + pixel scrolled >= total height
    if (
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight
    ) {
      console.log('end');
      if (!this.isLoading) {
        this.currentPage += 1;

        this.loadData(this.currentPage, this.limit);
      }
    }
  }

  loadData(currentPage: number, limit: number) {
    this.isLoading = true;
    this.dashboardService
      .getImages(currentPage, limit)
      .subscribe((imgs: Image[]) => {
        this.isLoading = false;
        this.images = [...imgs];
      });
  }

  onScrollDown() {
    if (!this.isLoading) {
      this.currentPage += 1;

      this.loadData(this.currentPage, this.limit);
    }

    // add another 20 items
    // const start = this.sum;
    // this.sum += 20;
    // this.appendItems(start, this.sum);

    // this.direction = 'down';
  }

  // onUp(ev) {
  //   console.log('scrolled up!', ev);
  //   const start = this.sum;
  //   this.sum += 20;
  //   this.prependItems(start, this.sum);

  //   this.direction = 'up';
  // }
}
