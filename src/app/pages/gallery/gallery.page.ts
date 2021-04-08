import { Component, ViewChild } from '@angular/core';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';
import { ImageModalComponent } from 'src/app/components/images/image-modal/image-modal.component';
import { ImageContent } from 'src/app/interfaces/image-content';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss']
})
export class GalleryPage extends Page {
  private readonly _srcFolder: string = "assets/images/photos/gallery/";
  private _galleryRows: GalleryRow[];

  @ViewChild(ImageModalComponent, { static: true }) public imageModal: ImageModalComponent;

  public constructor(title: Title, meta: Meta) {
    super(title, meta);

    this._title.setTitle("Gallery");
    this.setMetaDescription("Check out these fun photos of Jules. With new music on the way, new images will be updated and added to this gallery.");
    this.setGalleryImages();
  }

  private setGalleryImages() {
    this._galleryRows = [
      {
        rowImages: [
          { src: `leaning-against-wall.jpeg`, alt: `person-leaning-against-wall` },
          { src: `posing-with-graffiti.jpg`, alt: `person-standing-in-front-of-graffiti` },
          { src: `flash-smiling.jpg`, alt: `person-leaning-against-wall` }
        ]
      },
      {
        rowImages: [
          { src: `laying-with-phone-3.jpg`, alt: `person-laying-with-phone` },
          { src: `laying-with-phone-2.jpg`, alt: `person-laying-with-phone` },
          { src: `looking-in-mirror.jpg`, alt: `person-looking-in-mirror` }
        ]
      },
      {
        rowImages: [
          { src: `standing-with-glitter-4.jpeg`, alt: `person-standing-with-glitter-background` },
          { src: `standing-against-wall.jpg`, alt: `person-standing-against-wall` },
          { src: `standing-with-glitter-3.jpeg`, alt: `person-standing-with-glitter-background` }
        ]
      },
      {
        rowImages: [
          { src: `sitting-1.jpg`, alt: `person-sitting` },
          { src: `standing-with-phone-3.jpg`, alt: `person-standing-with-phone` },
          { src: `standing-with-phone-2.jpg`, alt: `person-standing-with-phone` }
        ]
      },
      {
        rowImages: [
          { src: `looking-behind.jpg`, alt: `person-standing-and-looking-behind` },
          { src: `looking-away-2.jpg`, alt: `person-looking-away` },
          { src: `sitting-with-glitter-1.jpeg`, alt: `person-sitting-with-glitter-background` }
        ]
      },
      {
        rowImages: [
          { src: `sitting-with-glitter-2.jpg`, alt: `person-sitting-with-glitter-background` },
          { src: `standing-up-bright-elbow.jpg`, alt: `person-with-elbow-against-wall` },
          { src: `standing-with-glitter-1.jpeg`, alt: `person-standing-with-glitter-background` },
        ]
      },
      {
        rowImages: [
          { src: `sitting-2.jpg`, alt: `person-sitting` },
          { src: `looking-away.jpg`, alt: `person-standing-and-looking-away` },
          { src: `holding-phone-cord.jpg`, alt: `person-holding-phone-cord` },
        ]
      },
      {
        rowImages: [
          { src: `posing-with-phone.jpg`, alt: `person-posing-with-phone` },
          { src: `sitting-with-phone-5.jpg`, alt: `person-sitting-with-phone` },
          { src: `sitting-with-phone-4.jpg`, alt: `person-sitting-with-phone` }
        ]
      },
      {
        rowImages: [
          { src: `sitting-with-phone-3.jpg`, alt: `person-sitting-with-phone` },
          { src: `sitting-with-phone-2.jpg`, alt: `person-sitting-with-phone` },
          { src: `talking-on-phone-2.jpg`, alt: `person-talking-on-phone` }
        ]
      }
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