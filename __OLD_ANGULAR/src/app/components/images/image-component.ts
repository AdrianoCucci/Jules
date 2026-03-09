import { Directive, Input } from '@angular/core';
import { ImageContent } from 'src/app/interfaces/image-content';

@Directive()
export abstract class ImageComponent implements ImageContent {
  @Input() public src: string = '';
  @Input() public alt: string = '';
  @Input() public caption?: string;
  @Input() public description?: string;
}
