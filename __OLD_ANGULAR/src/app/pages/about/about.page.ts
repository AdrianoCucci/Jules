import { Component } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage extends Page {
  public constructor() {
    super();

    this.setTitle('About');
    this.setMetaDescription(
      'Get to know more about Jules, her life growing up, and most importantly, her love and passion for music and entertaining!'
    );
  }
}
