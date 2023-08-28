import { Component, ViewChild } from '@angular/core';
import { ImageModalComponent } from 'src/app/components/images/image-modal/image-modal.component';
import { ImageContent } from 'src/app/interfaces/image-content';
import { Page } from '../page';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage extends Page {
  private readonly _srcFolder: string = 'assets/images/photos/gallery/';
  private _galleryRows: GalleryRow[] = [];

  @ViewChild(ImageModalComponent, { static: true })
  public imageModal!: ImageModalComponent;

  public constructor() {
    super();

    this.setTitle('Gallery');
    this.setMetaDescription(
      'Check out these fun photos of Jules. With new music on the way, new images will be updated and added to this gallery.'
    );
    this.setGalleryImages();
  }

  private setGalleryImages() {
    this._galleryRows = [
      {
        rowImages: [
          {
            src: `IMG_2813-min.jpeg`,
            alt: `person-standing-on-concert-stage`,
          },
          {
            src: `IMG_2814-min.JPG`,
            alt: `person-singing-on-concert-stage`,
          },
          {
            src: `IMG_2818-min.JPG`,
            alt: `person-singing-on-concert-stage`,
          },
        ],
      },
      {
        rowImages: [
          {
            src: `IMG_2820-min.JPG`,
            alt: `person-singing-on-concert-stage`,
          },
          {
            src: `IMG_2821-min.JPG`,
            alt: `person-singing-on-concert-stage`,
          },
          {
            src: `IMG_2822-min.JPG`,
            alt: `person-singing-on-concert-stage`,
          },
        ],
      },
      {
        rowImages: [
          {
            src: `IMG_2824-min.JPG`,
            alt: `person-singing-on-concert-stage`,
          },
          {
            src: `IMG_6773-min.JPG`,
            alt: `person-sitting-on-window-sill`,
          },
          {
            src: `IMG_8164-min.JPG`,
            alt: `person-looking-into-mirror`,
          },
        ],
      },
      {
        rowImages: [
          {
            src: `IMG_8169-min.JPG`,
            alt: `person-looking-through-fence`,
          },
          {
            src: `IMG_8170-min.JPG`,
            alt: `person-standing-on-box-and-looking-back`,
          },
          {
            src: `IMG_8270-min.JPG`,
            alt: `person-posing-for-camera`,
          },
        ],
      },
      {
        rowImages: [
          {
            src: `IMG_8271-min.JPG`,
            alt: `person-posing-for-camera`,
          },
          {
            src: `IMG_8272-min.JPG`,
            alt: `person-posing-in-front-of-motorcycle`,
          },
          {
            src: `IMG_8277-min.JPG`,
            alt: `person-posing-inside-telephone-booth`,
          },
        ],
      },
      {
        rowImages: [
          {
            src: `IMG_8839-min.JPG`,
            alt: `people-dancing`,
          },
          {
            src: `IMG_8841-min.JPG`,
            alt: `people-dancing-in-front-of-camera`,
          },
          {
            src: `IMG_8842-min.JPG`,
            alt: `people-dancing-in-front-of-camera`,
          },
        ],
      },
      {
        rowImages: [
          {
            src: `IMG_8844-min.JPG`,
            alt: `people-dancing`,
          },
          {
            src: `standing-with-glitter-4.jpeg`,
            alt: `person-standing-with-glitter-background`,
          },
          { src: `sitting-1.jpg`, alt: `person-sitting` },
        ],
      },
      {
        rowImages: [
          { src: `flash-smiling.jpg`, alt: `person-leaning-against-wall` },
          {
            src: `leaning-against-wall.jpeg`,
            alt: `person-leaning-against-wall`,
          },
          {
            src: `standing-against-wall.jpg`,
            alt: `person-standing-against-wall`,
          },
        ],
      },
      {
        rowImages: [
          { src: `laying-with-phone-3.jpg`, alt: `person-laying-with-phone` },
          { src: `laying-with-phone-2.jpg`, alt: `person-laying-with-phone` },
          { src: `looking-in-mirror.jpg`, alt: `person-looking-in-mirror` },
        ],
      },
      {
        rowImages: [
          {
            src: `standing-with-glitter-3.jpeg`,
            alt: `person-standing-with-glitter-background`,
          },
          {
            src: `standing-with-phone-3.jpg`,
            alt: `person-standing-with-phone`,
          },
          {
            src: `standing-with-phone-2.jpg`,
            alt: `person-standing-with-phone`,
          },
        ],
      },
      {
        rowImages: [
          {
            src: `posing-with-graffiti.jpg`,
            alt: `person-standing-in-front-of-graffiti`,
          },
          {
            src: `looking-behind.jpg`,
            alt: `person-standing-and-looking-behind`,
          },
          { src: `looking-away-2.jpg`, alt: `person-looking-away` },
        ],
      },
      {
        rowImages: [
          {
            src: `sitting-with-glitter-1.jpeg`,
            alt: `person-sitting-with-glitter-background`,
          },
          {
            src: `sitting-with-glitter-2.jpg`,
            alt: `person-sitting-with-glitter-background`,
          },
          {
            src: `standing-up-bright-elbow.jpg`,
            alt: `person-with-elbow-against-wall`,
          },
        ],
      },
      {
        rowImages: [
          {
            src: `standing-with-glitter-1.jpeg`,
            alt: `person-standing-with-glitter-background`,
          },
          { src: `sitting-2.jpg`, alt: `person-sitting` },
          { src: `looking-away.jpg`, alt: `person-standing-and-looking-away` },
        ],
      },
      {
        rowImages: [
          { src: `holding-phone-cord.jpg`, alt: `person-holding-phone-cord` },
          { src: `posing-with-phone.jpg`, alt: `person-posing-with-phone` },
          { src: `sitting-with-phone-5.jpg`, alt: `person-sitting-with-phone` },
        ],
      },
      {
        rowImages: [
          { src: `sitting-with-phone-4.jpg`, alt: `person-sitting-with-phone` },
          { src: `sitting-with-phone-3.jpg`, alt: `person-sitting-with-phone` },
          { src: `sitting-with-phone-2.jpg`, alt: `person-sitting-with-phone` },
        ],
      },
      {
        rowImages: [
          { src: `talking-on-phone-2.jpg`, alt: `person-talking-on-phone` },
        ],
      },
    ];
  }

  public get srcFolder(): string {
    return this._srcFolder;
  }

  public get galleryRows(): GalleryRow[] {
    return this._galleryRows;
  }
}

interface GalleryRow {
  rowImages: ImageContent[];
}
