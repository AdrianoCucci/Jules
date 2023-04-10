import { Component } from '@angular/core';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends Page {
  public constructor(title: Title, meta: Meta) {
    super(title, meta);

    this.setTitle('Home');
    this.setMetaDescription(
      "This is the official website for Jules! Here you will find new updates about her music, videos, and photos, as well as links to Jules' social media platforms (@realjulesmusic)."
    );
  }
}
