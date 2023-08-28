import { Component, inject } from '@angular/core';
import { Page } from '../page';
import { YouTubeEmbedService } from 'src/app/services/youtube-embed.service';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage extends Page {
  public readonly youTubeUrls: SafeResourceUrl[];

  private readonly _youtubeService: YouTubeEmbedService =
    inject(YouTubeEmbedService);

  public constructor() {
    super();

    this.setTitle('Videos');
    this.setMetaDescription(
      "Here you can find awesome content for Jules' new single, \"Don't Wanna Be\". A lyric video and a live virtual performance of the song can also be found on Jules' YouTube channel: (Jules Music Official)."
    );

    this.youTubeUrls = this._youtubeService.sources;
  }
}
