import { SafeResourceUrl } from '@angular/platform-browser';

export type AudoSourceType = 'local' | 'spotify';

export interface SongAudio {
  source: string;
  type: AudoSourceType;
}

export interface Song {
  title: string;
  coverImageSrc: string;
  audio?: SongAudio;
  releaseDate?: Date;
  viewUrl?: SafeResourceUrl;
  embedUrl?: SafeResourceUrl;
}
