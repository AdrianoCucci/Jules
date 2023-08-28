import { Component, inject } from '@angular/core';
import { UpcomingTrack } from 'src/app/interfaces/upcoming-track';
import { UpcomingTrackService } from 'src/app/services/upcoming-track.service';

@Component({
  selector: 'app-upcoming-track',
  templateUrl: './upcoming-track.component.html',
  styleUrls: ['./upcoming-track.component.scss'],
})
export class UpcomingTrackComponent {
  public readonly upcomingTrack: UpcomingTrack =
    inject(UpcomingTrackService).upcomingTrack;
}
