import { Component } from '@angular/core';
import { SpotifySource, SpotifySourcesService } from 'src/app/services/spotify-urls.service';

@Component({
  selector: 'app-spotify-embed-list',
  templateUrl: './spotify-embed-list.component.html',
  styleUrls: ['./spotify-embed-list.component.scss']
})
export class SpotifyEmbedListComponent {
  public readonly spotifySources: SpotifySource[];
  constructor(spotifyService: SpotifySourcesService) {
    this.spotifySources = spotifyService.sources
  }
}
