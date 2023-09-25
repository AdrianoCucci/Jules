import { Component, ViewChild, inject } from '@angular/core';
import { ImageModalComponent } from 'src/app/components/images/image-modal/image-modal.component';
import { ImageContent } from 'src/app/interfaces/image-content';
import { Page } from '../page';
import { GalleryRow } from 'src/app/interfaces/gallery-row';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage extends Page {
  public readonly galleryRows: GalleryRow[] =
    inject(GalleryService).getGalleryRows();

  @ViewChild(ImageModalComponent, { static: true })
  public readonly imageModal!: ImageModalComponent;

  public constructor() {
    super();

    this.setTitle('Gallery');
    this.setMetaDescription(
      'Check out these fun photos of Jules. With new music on the way, new images will be updated and added to this gallery.'
    );
  }
}
