import { Component, inject } from '@angular/core';
import { Page } from '../page';
import { VideoEmbedService } from 'src/app/services/video-embed.service';
import { VideoSource } from 'src/app/interfaces/video-source';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage extends Page {
  public readonly sources: VideoSource[] = inject(VideoEmbedService).sources;

  public constructor() {
    super();

    this.setTitle('Videos');
    this.setMetaDescription(
      "Here you can find awesome content for Jules' new single, \"Don't Wanna Be\". A lyric video and a live virtual performance of the song can also be found on Jules' YouTube channel: (Jules Music Official)."
    );
  }
}
