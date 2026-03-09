import {
  Component,
  AfterViewInit,
  QueryList,
  ContentChildren,
  Input,
  HostListener,
} from '@angular/core';
import { CarouselImageComponent } from '../carousel-image/carousel-image.component';
import {
  IconDefinition,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
})
export class ImageCarouselComponent implements AfterViewInit {
  @Input() public arrows: boolean = true;

  public readonly buttonIcon: IconDefinition = faChevronLeft;

  @ContentChildren(CarouselImageComponent)
  private _imagesQuery!: QueryList<CarouselImageComponent>;

  private _carouselImages: CarouselImageComponent[] = [];
  private _activeIndex: number = 0;

  private _autoScroll: boolean = false;
  private _allowAutoScroll: boolean = false;
  private _scrollInterval?: number;

  ngAfterViewInit() {
    this._carouselImages = this._imagesQuery.toArray();

    if (this._carouselImages.length > 0) {
      setTimeout(() => {
        this._carouselImages[0].animateIn('left');

        if (this._carouselImages.length < 2) {
          this.arrows = false;
        }
      }, 1);
    }
  }

  public nextImage(disableAutoScroll: boolean = true) {
    const imagesLength: number = this._carouselImages.length;

    if (imagesLength > 1) {
      this._carouselImages[this._activeIndex].animateOut('left');

      ++this._activeIndex;
      if (this._activeIndex >= imagesLength) {
        this._activeIndex = 0;
      }

      this._carouselImages[this._activeIndex].animateIn('left');
    }

    this._allowAutoScroll = !disableAutoScroll;
  }

  public prevImage(disableAutoScroll: boolean = true) {
    const imagesLength: number = this._carouselImages.length;

    if (imagesLength > 1) {
      this._carouselImages[this._activeIndex].animateOut('right');

      --this._activeIndex;
      if (this._activeIndex < 0) {
        this._activeIndex = imagesLength - 1;
      }

      this._carouselImages[this._activeIndex].animateIn('right');
    }

    this._allowAutoScroll = !disableAutoScroll;
  }

  @HostListener('mouseleave') private mouseLeave() {
    this._allowAutoScroll = true;
  }

  public get autoScroll(): boolean {
    return this._autoScroll;
  }
  @Input() public set autoScroll(value: boolean) {
    this._autoScroll = value;
    this._allowAutoScroll = value;

    if (value) {
      this._scrollInterval = window.setInterval(() => {
        if (this._allowAutoScroll) {
          this.nextImage(false);
        }
      }, 5000);
    } else {
      clearInterval(this._scrollInterval);
    }
  }
}
