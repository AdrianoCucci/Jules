import { Component } from '@angular/core';
import { TextInputComponent } from '../text-input.component';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent extends TextInputComponent {}
