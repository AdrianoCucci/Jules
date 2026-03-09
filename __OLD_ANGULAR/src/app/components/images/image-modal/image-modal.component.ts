import { Component, HostBinding, HostListener } from '@angular/core';
import { ImageComponent } from '../image-component';
import { ImageContent } from 'src/app/interfaces/image-content';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent extends ImageComponent {
  @HostBinding('class.visible') public visible: boolean = false;

  public show(imageContent?: ImageContent) {
    if (imageContent) {
      this.src = imageContent.src;
      this.alt = imageContent.alt;
      this.caption = imageContent.caption;
      this.description = imageContent.description;
    }
    this.visible = true;
  }

  @HostListener('click') public hide() {
    this.visible = false;
  }
}
