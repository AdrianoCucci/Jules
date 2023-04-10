import { Component, Input, HostBinding } from '@angular/core';
import { FormInput } from '../form-input';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent extends FormInput<string> {
  @Input() public label: string = '';
  @Input() public placeholder: string = '';

  @HostBinding('class.raised-label') public raisedLabel: boolean = false;

  private _regexMatch?: RegexMatch;

  public constructor() {
    super('text', '');
  }

  ngOnInit() {
    if (this.type === 'email') {
      this._regexMatch = {
        regex:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        invalidError: 'This email is invalid',
      };
    }
  }

  protected onValidate(): boolean {
    let isValid: boolean = this.required ? this._value != '' : true;

    if (!isValid) {
      this._error = 'This field is required';
    } else if (this._regexMatch) {
      isValid = this.value?.match(this._regexMatch.regex) != null;

      if (!isValid) {
        this._error = this._regexMatch.invalidError;
      }
    }

    return isValid;
  }
}

interface RegexMatch {
  regex: RegExp;
  invalidError: string;
}
