import { Component } from '@angular/core';
import {
  faHome,
  faMusic,
  faStar,
  faImages,
  faVideo,
  faShoppingBag,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  public readonly iconHome: IconDefinition = faHome;
  public readonly iconMusic: IconDefinition = faMusic;
  public readonly iconAbout: IconDefinition = faStar;
  public readonly iconVideos: IconDefinition = faVideo;
  public readonly iconGallery: IconDefinition = faImages;
  public readonly iconMerch: IconDefinition = faShoppingBag;
}
