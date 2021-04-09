import { AppInput } from './input';
import { Input, HostBinding, OnInit, Output, EventEmitter, Directive } from '@angular/core';

@Directive()
export abstract class FormInput<T> extends AppInput implements OnInit {
  @Input() public required: boolean;

  protected _value: T;

  @Output() public readonly valueChange: EventEmitter<T>;

  @HostBinding("class.invalid") private _invalid: boolean;

  protected _error: string;

  public constructor(type?: string, value?: T) {
    super(type);
    this._value = value;

    this.required = false;
    this.valueChange = new EventEmitter<T>();
  }

  ngOnInit() {
    super.ngOnInit();

    if(!this.required) {
      this.required = String(this.required) !== "false";
    }
  }

  public validate(): boolean {
    let isValid: boolean = this.onValidate();

    this._invalid = !isValid;
    return isValid;
  }

  protected abstract onValidate(): boolean;

  public get value(): T {
    return this._value;
  }
  @Input() public set value(value: T) {
    this._value = value;
    this.valueChange.emit(value);
  }

  public get error(): string {
    return this._error;
  }
}