import { Component } from '@angular/core';
import { Page } from '../page';
import { Title, Meta } from '@angular/platform-browser';
import { YouTubeEmbedService } from 'src/app/services/youtube-embed-service';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss']
})
export class VideosPage extends Page {
  public readonly youTubeUrls: string[];

  public constructor(title: Title, meta: Meta, youTubeService: YouTubeEmbedService) {
    super(title, meta);

    this.setTitle("Videos");
    this.setMetaDescription("Here you can find awesome content for Jules' new single, \"Don't Wanna Be\". A lyric video and a live virtual performance of the song can also be found on Jules' YouTube channel: (Jules Music Official).");
    this.youTubeUrls = youTubeService.sources as string[];
  }
}
