import { Component, inject } from '@angular/core';
import { Song } from 'src/app/interfaces/song';
import { SongService } from 'src/app/services/song.service';
import { Page } from '../page';

@Component({
  selector: 'app-music-page',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage extends Page {
  public readonly songs: Song[];
  private readonly _songService: SongService = inject(SongService);

  public constructor() {
    super();

    this.setTitle('Music');
    this.setMetaDescription(
      'Stream Jules\' first single, "Don\'t Wanna Be", available now on all streaming platforms. Links can be found here! New music is dropping from Jules very soon!'
    );

    const songs = this._songService.getSongs();
    const latestSong = this._songService.getLatestSong();
    this.songs = songs.filter((s: Song) => s !== latestSong);
  }
}
