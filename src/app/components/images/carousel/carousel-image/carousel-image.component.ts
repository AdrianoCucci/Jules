import { Component, HostBinding, Input } from '@angular/core';
import { ImageComponent } from '../../image-component';

@Component({
  selector: 'app-carousel-image',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.scss'],
})
export class CarouselImageComponent extends ImageComponent {
  @Input() @HostBinding('attr.in-animation') public inAnimation: Animation =
    'cut';
  @Input() @HostBinding('attr.out-animation') public outAnimation: Animation =
    'cut';

  @HostBinding('class.active') private _active: boolean = false;
  @HostBinding('class.exiting') private _exiting: boolean = false;

  @HostBinding('class.in-l') private _inL: boolean = false;
  @HostBinding('class.out-l') private _outL: boolean = false;
  @HostBinding('class.in-r') private _inR: boolean = false;
  @HostBinding('class.out-r') private _outR: boolean = false;

  private _exitTimeout?: number;

  public animateIn(value: 'left' | 'right') {
    this._active = true;

    this._inL = value === 'left';
    this._inR = value === 'right';

    this._outL = false;
    this._outR = false;

    this._exiting = false;
    clearTimeout(this._exitTimeout);
  }

  public animateOut(value: 'left' | 'right') {
    this._active = false;

    this._outL = value === 'left';
    this._outR = value === 'right';

    this._inL = false;
    this._inR = false;

    if (this.outAnimation !== 'cut') {
      this._exiting = true;
      this._exitTimeout = window.setTimeout(
        () => (this._exiting = false),
        1000
      );
    }
  }

  public get active(): boolean {
    return this._active;
  }

  public get exiting(): boolean {
    return this._exiting;
  }

  public get outL(): boolean {
    return this._outL;
  }

  public get outR(): boolean {
    return this._outR;
  }

  public get inL(): boolean {
    return this._inL;
  }

  public get inR(): boolean {
    return this._inR;
  }
}

type Animation = 'cut' | 'slide' | 'fade' | 'layer';
