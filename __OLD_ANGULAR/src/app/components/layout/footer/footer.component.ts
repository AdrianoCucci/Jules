import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public readonly emailIcon: IconDefinition;
  public readonly copyrightYear: number;

  public constructor() {
    this.emailIcon = faEnvelope;
    this.copyrightYear = new Date().getFullYear();
  }
}
