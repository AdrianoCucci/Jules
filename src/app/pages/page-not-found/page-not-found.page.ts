import { Component } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'app-page-not-found-page',
  templateUrl: './page-not-found.page.html',
  styleUrls: ['./page-not-found.page.scss'],
})
export class PageNotFoundPage extends Page {
  public constructor() {
    super();
    this.setTitle('Page Not Found');
  }
}
