import { Injectable, inject } from '@angular/core';
import { Song } from '../interfaces/song';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  private readonly _sanitizer: DomSanitizer = inject(DomSanitizer);
  private readonly _spotifyBaseUrl: string =
    'https://open.spotify.com/embed/track';
  private readonly _imagesBaseUrl: string = 'assets/images/album-covers';

  private readonly _songs: Song[];

  constructor() {
    this._songs = [
      {
        title: `I'mPerfect - Jules & F.Y.D.I`,
        coverImageSrc: this.createImageUrl('im-perfect.jpg'),
        releaseDate: new Date(2023, 8, 22),
        viewUrl: 'https://open.spotify.com/album/5PJ0uz366sIaxYQPQ185zS',
      },
      {
        title: 'Famous Ex',
        coverImageSrc: this.createImageUrl('famous-ex.jpg'),
        embedUrl: this.createSafeUrlSource(
          '46u7KCl5A0TQpV5d12VPU2',
          this._spotifyBaseUrl
        ),
      },
      {
        title: 'All Night Long',
        coverImageSrc: this.createImageUrl('all-night-long.jpg'),
        embedUrl: this.createSafeUrlSource(
          '6PogkqYpaWV2bW1pVRNs8s',
          this._spotifyBaseUrl
        ),
      },
      {
        title: 'This Love',
        coverImageSrc: this.createImageUrl('this-love.jpg'),
        embedUrl: this.createSafeUrlSource(
          '0ecJ4ZHSx1EbtyrTuxeF3v',
          this._spotifyBaseUrl
        ),
      },
      {
        title: `Don't Wanna Be`,
        coverImageSrc: this.createImageUrl('dont-wanna-be.jpg'),
        embedUrl: this.createSafeUrlSource(
          '4PjA8d9XMZvyvlK4gf1amF',
          this._spotifyBaseUrl
        ),
      },
    ];
  }

  public getSongs(): Song[] {
    return this._songs;
  }

  public findSong(predicate: (song: Song) => boolean): Song | undefined {
    return this._songs.find(predicate);
  }

  public getLatestSong(): Song | undefined {
    return this._songs
      .filter((s: Song) => s.releaseDate)
      .sort((a: Song, b: Song) => {
        const dateA: Date = a.releaseDate!;
        const dateB: Date = b.releaseDate!;
        return dateA < dateB ? 1 : -1;
      })[0];
  }

  public isSongReleased(song: Song): boolean {
    return !!song.releaseDate && song.releaseDate < new Date();
  }

  private createSafeUrlSource(
    source: string,
    baseUrl: string
  ): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(
      `${baseUrl}/${source}`
    );
  }

  private createImageUrl(
    source: string,
    baseUrl: string = this._imagesBaseUrl
  ): string {
    return `${baseUrl}/${source}`;
  }
}
