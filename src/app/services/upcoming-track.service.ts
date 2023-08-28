import { Injectable } from '@angular/core';
import { UpcomingTrack } from '../interfaces/upcoming-track';

@Injectable({
  providedIn: 'root',
})
export class UpcomingTrackService {
  public readonly upcomingTrack: UpcomingTrack = {
    title: `I'm perfect`,
    coverImageSrc: 'assets/images/album-covers/im-perfect.jpg',
    audioSrc: 'assets/audio/ImPerfect_Jules_and_FYDI_teaserfinal.mp3',
    releaseDate: new Date(2023, 8, 22),
    presaveUrl: 'https://distrokid.com/hyperfollow/julesandfydi/imperfect',
  };
}
