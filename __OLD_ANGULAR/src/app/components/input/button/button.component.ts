import { Component, Input } from '@angular/core';
import { AppInput } from '../input';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent extends AppInput {
  @Input() public disabled: boolean = false;

  public constructor() {
    super('button');
  }
}
