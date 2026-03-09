import { Injectable } from '@angular/core';
import { GalleryRow } from '../interfaces/gallery-row';
import { ImageContent } from '../interfaces/image-content';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private readonly _imagesBaseUrl: string = 'assets/images/photos/gallery/';
  private _galleryRows: GalleryRow[] = [];

  constructor() {
    const images: ImageContent[] = [
      {
        src: 'IMG_3855.JPG',
        alt: 'person-posing-for-camera',
      },
      {
        src: 'IMG_3857.jpg',
        alt: 'person-posing-for-camera',
      },
      {
        src: 'IMG_3859.jpg',
        alt: 'person-posing-for-camera',
      },
      {
        src: 'IMG_3860.JPG',
        alt: 'person-posing-for-camera',
      },
      {
        src: 'IMG_3861.JPG',
        alt: 'person-posing-for-camera',
      },
      {
        src: 'IMG_2813-min.jpeg',
        alt: 'person-standing-on-concert-stage',
      },
      {
        src: 'IMG_2814-min.JPG',
        alt: 'person-singing-on-concert-stage',
      },
      {
        src: 'IMG_2818-min.JPG',
        alt: 'person-singing-on-concert-stage',
      },
      {
        src: 'IMG_2820-min.JPG',
        alt: 'person-singing-on-concert-stage',
      },
      {
        src: 'IMG_2821-min.JPG',
        alt: 'person-singing-on-concert-stage',
      },
      {
        src: 'IMG_2822-min.JPG',
        alt: 'person-singing-on-concert-stage',
      },
      {
        src: 'IMG_2824-min.JPG',
        alt: 'person-singing-on-concert-stage',
      },
      {
        src: 'IMG_6773-min.JPG',
        alt: 'person-sitting-on-window-sill',
      },
      {
        src: 'IMG_8164-min.JPG',
        alt: 'person-looking-into-mirror',
      },
      {
        src: 'IMG_8169-min.JPG',
        alt: 'person-looking-through-fence',
      },
      {
        src: 'IMG_8170-min.JPG',
        alt: 'person-standing-on-box-and-looking-back',
      },
      {
        src: 'IMG_8270-min.JPG',
        alt: 'person-posing-for-camera',
      },
      {
        src: 'IMG_8271-min.JPG',
        alt: 'person-posing-for-camera',
      },
      {
        src: 'IMG_8272-min.JPG',
        alt: 'person-posing-in-front-of-motorcycle',
      },
      {
        src: 'IMG_8277-min.JPG',
        alt: 'person-posing-inside-telephone-booth',
      },
      {
        src: 'IMG_8839-min.JPG',
        alt: 'people-dancing',
      },
      {
        src: 'IMG_8841-min.JPG',
        alt: 'people-dancing-in-front-of-camera',
      },
      {
        src: 'IMG_8842-min.JPG',
        alt: 'people-dancing-in-front-of-camera',
      },
      {
        src: 'IMG_8844-min.JPG',
        alt: 'people-dancing',
      },
      {
        src: 'standing-with-glitter-4.jpeg',
        alt: 'person-standing-with-glitter-background',
      },
      {
        src: 'sitting-1.jpg',
        alt: 'person-sitting',
      },
      {
        src: 'flash-smiling.jpg',
        alt: 'person-leaning-against-wall',
      },
      {
        src: 'leaning-against-wall.jpeg',
        alt: 'person-leaning-against-wall',
      },
      {
        src: 'standing-against-wall.jpg',
        alt: 'person-standing-against-wall',
      },
      {
        src: 'laying-with-phone-3.jpg',
        alt: 'person-laying-with-phone',
      },
      {
        src: 'laying-with-phone-2.jpg',
        alt: 'person-laying-with-phone',
      },
      {
        src: 'looking-in-mirror.jpg',
        alt: 'person-looking-in-mirror',
      },
      {
        src: 'standing-with-glitter-3.jpeg',
        alt: 'person-standing-with-glitter-background',
      },
      {
        src: 'standing-with-phone-3.jpg',
        alt: 'person-standing-with-phone',
      },
      {
        src: 'standing-with-phone-2.jpg',
        alt: 'person-standing-with-phone',
      },
      {
        src: 'posing-with-graffiti.jpg',
        alt: 'person-standing-in-front-of-graffiti',
      },
      {
        src: 'looking-behind.jpg',
        alt: 'person-standing-and-looking-behind',
      },
      {
        src: 'looking-away-2.jpg',
        alt: 'person-looking-away',
      },
      {
        src: 'sitting-with-glitter-1.jpeg',
        alt: 'person-sitting-with-glitter-background',
      },
      {
        src: 'sitting-with-glitter-2.jpg',
        alt: 'person-sitting-with-glitter-background',
      },
      {
        src: 'standing-up-bright-elbow.jpg',
        alt: 'person-with-elbow-against-wall',
      },
      {
        src: 'standing-with-glitter-1.jpeg',
        alt: 'person-standing-with-glitter-background',
      },
      {
        src: 'sitting-2.jpg',
        alt: 'person-sitting',
      },
      {
        src: 'looking-away.jpg',
        alt: 'person-standing-and-looking-away',
      },
      {
        src: 'holding-phone-cord.jpg',
        alt: 'person-holding-phone-cord',
      },
      {
        src: 'posing-with-phone.jpg',
        alt: 'person-posing-with-phone',
      },
      {
        src: 'sitting-with-phone-5.jpg',
        alt: 'person-sitting-with-phone',
      },
      {
        src: 'sitting-with-phone-4.jpg',
        alt: 'person-sitting-with-phone',
      },
      {
        src: 'sitting-with-phone-3.jpg',
        alt: 'person-sitting-with-phone',
      },
      {
        src: 'sitting-with-phone-2.jpg',
        alt: 'person-sitting-with-phone',
      },
      {
        src: 'talking-on-phone-2.jpg',
        alt: 'person-talking-on-phone',
      },
    ];

    this._galleryRows = this.createGalleryRows(images);
  }

  public getGalleryRows(): GalleryRow[] {
    return this._galleryRows;
  }

  private createGalleryRows(images: ImageContent[]): GalleryRow[] {
    const galleryRows: GalleryRow[] = [];
    let index: number = 0;

    while (index < images.length) {
      const currentRowImages: ImageContent[] = [];

      for (let i = 0; i < 3; i++) {
        const image: ImageContent = images[index];
        if (!image) {
          break;
        }

        currentRowImages.push({
          ...image,
          src: this.createImageUrl(image.src),
        });

        index++;
      }

      galleryRows.push({ rowImages: [...currentRowImages] });
    }

    return galleryRows;
  }

  private createImageUrl(
    source: string,
    baseUrl: string = this._imagesBaseUrl
  ): string {
    return `${baseUrl}/${source}`;
  }
}
