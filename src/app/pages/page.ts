import { Title, Meta } from '@angular/platform-browser';

export abstract class Page {
  protected _title: Title;
  protected _meta: Meta;

  protected constructor(title: Title, meta: Meta) {
    this._title = title;
    this._meta = meta;

    window.scroll({ top: 0 });
    this._meta.addTag({ name: "description" });
  }

  protected setMetaDescription(description: string) {
    this._meta.updateTag({ name: "description", content: description });
  }
}