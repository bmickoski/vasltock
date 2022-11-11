import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from './../../models/image.model';

/**
 * Service contains methods to perform dashboard logic
 */
@Injectable({ providedIn: 'root' })
export class DashboardService {
  constructor(private http: HttpClient) {}

  /**
   * Get list of images
   *
   * @returns photos
   */
  getImages(page: number, limit: number): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.set('page', page).set('limit', limit);

    return this.http.get('https://picsum.photos/v2/list', { params });
  }

  /**
   * Get image details
   *
   * @param id image id
   * @returns image details
   */
  getImageDetails(id: string): Observable<any> {
    return this.http.get('https://picsum.photos/id/' + id + '/info');
  }

  /**
   * Prepare image for download
   *
   * @param image image
   * @returns image details
   */
  downloadImage(image: Image, width: string, height: string) {
    const imageUrl = image.download_url;
    const newImageUrl = imageUrl
      .substring(0, imageUrl.substring(0, imageUrl.length - 5).lastIndexOf('/'))
      .concat('/' + width + '/' + height);

    this.http
      .get(newImageUrl, {
        responseType: 'blob',
      })
      .subscribe((val) => {
        const url = URL.createObjectURL(val);
        this.downloadUrl(url, image.author + '_' + image.id + '.png');
        URL.revokeObjectURL(url);
      });
  }

  private downloadUrl(url: string, fileName: string) {
    const a: any = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.style = 'display: none';
    a.click();
    a.remove();
  }
}
