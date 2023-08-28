import { Component, inject } from '@angular/core';
import {
  SpotifyEmbedService,
  SpotifySource,
} from 'src/app/services/spotify-embed.service';
import { Page } from '../page';

@Component({
  selector: 'app-music-page',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage extends Page {
  public readonly spotifySources: SpotifySource[];

  private readonly _spotifyService: SpotifyEmbedService =
    inject(SpotifyEmbedService);

  public constructor() {
    super();

    this.setTitle('Music');
    this.setMetaDescription(
      'Stream Jules\' first single, "Don\'t Wanna Be", available now on all streaming platforms. Links can be found here! New music is dropping from Jules very soon!'
    );

    this.spotifySources = this._spotifyService.sources;
  }
}
