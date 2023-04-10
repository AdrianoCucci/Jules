import { Component, Input, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() public heading?: string;
  @Input() public tagline?: string;

  @HostBinding('class.large-heading') private _largeHeading: boolean = false;

  ngOnInit() {
    this._largeHeading = this.tagline === undefined;
  }

  public get headingSansLastChar(): string | undefined {
    return this.heading?.substring(0, this.heading.length - 1);
  }

  public get headingLastChar(): string | undefined {
    return this.heading?.charAt(this.heading.length - 1);
  }

  public get largeHeading(): boolean {
    return this._largeHeading;
  }
}
