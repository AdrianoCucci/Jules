import { Component } from '@angular/core';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';
import { SpotifySource, SpotifyEmbedService } from 'src/app/services/spotify-embed-service';

@Component({
  selector: 'app-music-page',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss']
})
export class MusicPage extends Page {
  public readonly spotifySources: SpotifySource[];

  public constructor(title: Title, meta: Meta, spotifyService: SpotifyEmbedService) {
    super(title, meta);

    this._title.setTitle("Music");
    this.setMetaDescription("Stream Jules' first single, \"Don't Wanna Be\", available now on all streaming platforms. Links can be found here! New music is dropping from Jules very soon!");
    this.spotifySources = spotifyService.sources;
  }
}
