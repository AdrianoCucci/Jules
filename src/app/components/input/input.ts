import { OnInit, Input, HostBinding, Directive } from '@angular/core';

@Directive()
export abstract class AppInput implements OnInit {
  @Input() public type: string;

  @Input() @HostBinding("class.block") public block: boolean;
  @Input() @HostBinding("class.rounded") public rounded: boolean;
  @Input() @HostBinding("class.outlined") public outlined: boolean;

  public constructor(type?: string) {
    this.type = type;
    this.block = false;
    this.rounded = false;
    this.outlined = false;
  }

  ngOnInit(): void {
    if(!this.block) {
      this.block = String(this.block) !== "false";
    }
    if(!this.rounded) {
      this.rounded = String(this.rounded) !== "false";
    }
    if(!this.outlined) {
      this.outlined = String(this.outlined) !== "false";
    }
  }
}