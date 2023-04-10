import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button.component';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss'],
})
export class LinkButtonComponent extends ButtonComponent {
  @Input() public href?: string;
  @Input() public routerLink?: string;
  @Input() public target?: string;
}
