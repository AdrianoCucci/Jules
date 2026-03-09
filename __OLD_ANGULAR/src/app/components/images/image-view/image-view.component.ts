import { Component, HostListener, EventEmitter, Output } from '@angular/core';
import { ImageComponent } from '../image-component';
import { ImageContent } from 'src/app/interfaces/image-content';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss'],
})
export class ImageViewComponent extends ImageComponent {
  @Output() public readonly onClick: EventEmitter<ImageContent>;

  public constructor() {
    super();
    this.onClick = new EventEmitter<ImageContent>();
  }

  @HostListener('click') private emitOnClick() {
    this.onClick.emit(this);
  }
}
