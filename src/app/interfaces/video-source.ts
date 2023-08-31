import { SafeResourceUrl } from '@angular/platform-browser';

export type VideoSourceOrigin = 'assets' | 'youtube';

export interface VideoSource {
  url: SafeResourceUrl;
  origin: VideoSourceOrigin;
}
