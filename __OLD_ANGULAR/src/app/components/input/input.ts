import { OnInit, Input, HostBinding, Directive } from '@angular/core';

@Directive()
export abstract class AppInput {
  @Input() public type: string;

  @Input() @HostBinding('class.block') public block: boolean = false;
  @Input() @HostBinding('class.rounded') public rounded: boolean = false;
  @Input() @HostBinding('class.outlined') public outlined: boolean = false;

  public constructor(type: string) {
    this.type = type;
  }
}
