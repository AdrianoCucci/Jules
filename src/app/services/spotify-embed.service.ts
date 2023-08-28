import { Injectable, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SpotifyEmbedService {
  public readonly sources: SpotifySource[];

  private readonly _sanitizer: DomSanitizer = inject(DomSanitizer);
  private readonly _spotifyBaseUrl: string =
    'https://open.spotify.com/embed/track';
  private readonly _imagesBaseUrl: string = 'assets/images/album-covers';

  constructor() {
    this.sources = [
      {
        url: this.createSafeUrlSource('46u7KCl5A0TQpV5d12VPU2'),
        title: 'Famous Ex',
        imageUrl: this.createImageUrl('famous-ex.jpg'),
      },
      {
        url: this.createSafeUrlSource('6PogkqYpaWV2bW1pVRNs8s'),
        title: 'All Night Long',
        imageUrl: this.createImageUrl('all-night-long.jpg'),
      },
      {
        url: this.createSafeUrlSource('0ecJ4ZHSx1EbtyrTuxeF3v'),
        title: 'This Love',
        imageUrl: this.createImageUrl('this-love.jpg'),
      },
      {
        url: this.createSafeUrlSource('4PjA8d9XMZvyvlK4gf1amF'),
        title: "Don't Wanna Be",
        imageUrl: this.createImageUrl('dont-wanna-be.jpg'),
      },
    ];
  }

  private createSafeUrlSource(
    source: string,
    baseUrl: string = this._spotifyBaseUrl
  ): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(
      `${baseUrl}/${source}?utm_source=generator`
    );
  }

  private createImageUrl(
    source: string,
    baseUrl: string = this._imagesBaseUrl
  ): string {
    return `${baseUrl}/${source}`;
  }
}

export interface SpotifySource {
  url: SafeResourceUrl;
  title: string;
  imageUrl: string;
}
