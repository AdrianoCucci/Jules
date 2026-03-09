import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import { MusicPage } from './music/music.page';
import { AboutPage } from './about/about.page';
import { GalleryPage } from './gallery/gallery.page';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundPage } from './page-not-found/page-not-found.page';
import { VideosPage } from './videos/videos.page';

const pages = [
  HomePage,
  MusicPage,
  AboutPage,
  VideosPage,
  GalleryPage,
  PageNotFoundPage,
];

@NgModule({
  imports: [CommonModule, ComponentsModule, HttpClientModule],
  declarations: pages,
  exports: pages,
})
export class PagesModule {}
