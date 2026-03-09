import { Route } from '@angular/router';
import { HomePage } from './app/pages/home/home.page';
import { MusicPage } from './app/pages/music/music.page';
import { AboutPage } from './app/pages/about/about.page';
import { VideosPage } from './app/pages/videos/videos.page';
import { GalleryPage } from './app/pages/gallery/gallery.page';
import { PageNotFoundPage } from './app/pages/page-not-found/page-not-found.page';

export const ROUTES: Route[] = [
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: 'music', component: MusicPage },
  { path: 'about', component: AboutPage },
  { path: 'videos', component: VideosPage },
  { path: 'gallery', component: GalleryPage },
  { path: 'home', redirectTo: '' },
  { path: '**', component: PageNotFoundPage },
];
