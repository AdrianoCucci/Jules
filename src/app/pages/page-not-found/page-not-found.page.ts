import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Page } from '../page';

@Component({
  selector: 'app-page-not-found-page',
  templateUrl: './page-not-found.page.html',
  styleUrls: ['./page-not-found.page.scss']
})
export class PageNotFoundPage extends Page {
  public constructor(title: Title, meta: Meta) {
    super(title, meta);
    this.setTitle("Page Not Found");
  }
}
