import { Component, inject } from '@angular/core';
import { Song } from 'src/app/interfaces/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-primary-song',
  templateUrl: './primary-song.component.html',
  styleUrls: ['./primary-song.component.scss'],
})
export class PrimarySongComponent {
  private readonly _songService: SongService = inject(SongService);

  public readonly song: Song | undefined;
  public readonly songIsReleased: boolean;

  constructor() {
    this.song = this._songService.getLatestSong();
    this.songIsReleased =
      !!this.song && this._songService.isSongReleased(this.song);
  }
}
