import { Injectable, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoSource, VideoSourceOrigin } from '../interfaces/video-source';

@Injectable({
  providedIn: 'root',
})
export class VideoEmbedService {
  public readonly sources: VideoSource[];

  private readonly _sanitizer: DomSanitizer = inject(DomSanitizer);
  private readonly _originBaseUrlsMap = new Map<VideoSourceOrigin, string>([
    ['assets', 'assets/videos'],
    ['youtube', 'https://www.youtube.com/embed'],
  ]);

  constructor() {
    this.sources = [
      this.createVideoSource('youtube', 'gAq6DNthSpg'),
      this.createVideoSource('youtube', 'u9J-wqZFbb8'),
      this.createVideoSource('youtube', 'RVkbzx6xk38'),
      this.createVideoSource('youtube', 'ZtCZfWioDrY'),
      this.createVideoSource('youtube', 'AknXzVv61MY'),
      this.createVideoSource('youtube', 'WnGPKwgSJJg'),
      this.createVideoSource('youtube', 'LRTeD0X4vU0'),
    ];
  }

  private createVideoSource(
    origin: VideoSourceOrigin,
    source: string
  ): VideoSource {
    return {
      origin,
      url: this._sanitizer.bypassSecurityTrustResourceUrl(
        `${this._originBaseUrlsMap.get(origin)}/${source}`
      ),
    };
  }
}
