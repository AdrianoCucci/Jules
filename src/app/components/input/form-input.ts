import { AppInput } from './input';
import {
  Input,
  HostBinding,
  Output,
  EventEmitter,
  Directive,
} from '@angular/core';

@Directive()
export abstract class FormInput<T> extends AppInput {
  @Input() public required: boolean = false;

  protected _value?: T;

  @Output() public readonly valueChange: EventEmitter<T> =
    new EventEmitter<T>();

  @HostBinding('class.invalid') private _invalid: boolean = false;

  protected _error?: string;

  public constructor(type?: string, value?: T) {
    super(type ?? 'text');
    this._value = value;
  }

  public validate(): boolean {
    let isValid: boolean = this.onValidate();

    this._invalid = !isValid;
    return isValid;
  }

  protected abstract onValidate(): boolean;

  public get value(): T | undefined {
    return this._value;
  }
  @Input() public set value(value: T | undefined) {
    this._value = value;
    this.valueChange.emit(value);
  }

  public get error(): string | undefined {
    return this._error;
  }
}
