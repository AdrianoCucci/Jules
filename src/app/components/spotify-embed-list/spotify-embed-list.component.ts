import { Component } from '@angular/core';
import { SpotifySource, SpotifyEmbedService } from 'src/app/services/spotify-embed-service';

@Component({
  selector: 'app-spotify-embed-list',
  templateUrl: './spotify-embed-list.component.html',
  styleUrls: ['./spotify-embed-list.component.scss']
})
export class SpotifyEmbedListComponent {
  public readonly spotifySources: SpotifySource[];
  constructor(spotifyService: SpotifyEmbedService) {
    this.spotifySources = spotifyService.sources
  }
}
