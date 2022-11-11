import { Image } from './../../../models/image.model';

export interface Album {
  id: number | string;
  name: string;
  images: Image[];
}

export function createAlbum(params: Partial<Album>) {
  return {} as Album;
}
