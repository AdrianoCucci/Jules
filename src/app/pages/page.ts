import { inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export abstract class Page {
  protected readonly _title: Title = inject(Title);
  protected readonly _meta: Meta = inject(Meta);

  protected constructor() {
    window.scroll({ top: 0 });
    this._meta.addTag({ name: 'description' });
  }

  protected setTitle(title: string) {
    title = !title ? 'Jules' : `Jules - ${title}`;
    this._title.setTitle(title);
  }

  protected setMetaDescription(description: string) {
    this._meta.updateTag({ name: 'description', content: description });
  }
}
