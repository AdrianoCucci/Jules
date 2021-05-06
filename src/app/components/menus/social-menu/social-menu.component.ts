import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-menu',
  templateUrl: './social-menu.component.html',
  styleUrls: ['./social-menu.component.scss']
})
export class SocialMenuComponent {
  public readonly iconFacebook: IconDefinition;
  public readonly iconInstagram: IconDefinition;
  public readonly iconYouTube: IconDefinition;
  public readonly iconTiktok: IconDefinition;

  public constructor() {
    this.iconFacebook = faFacebook;
    this.iconInstagram = faInstagram;
    this.iconYouTube = faYoutube;
    this.iconTiktok = faTiktok;
  }
}
