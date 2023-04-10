import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainMenuComponent } from './menus/main-menu/main-menu.component';
import { SocialMenuComponent } from './menus/social-menu/social-menu.component';
import { MobileMenuComponent } from './menus/mobile-menu/mobile-menu.component';
import { RowComponent } from './layout/row/row.component';
import { AppRoutingModule } from '../app-routing.module';
import { ColumnComponent } from './layout/column/column.component';
import { ImageViewComponent } from './images/image-view/image-view.component';
import { ImageModalComponent } from './images/image-modal/image-modal.component';
import { ImageCarouselComponent } from './images/carousel/image-carousel/image-carousel.component';
import { CarouselImageComponent } from './images/carousel/carousel-image/carousel-image.component';
import { TextInputComponent } from './input/text-input/text-input.component';
import { TextAreaComponent } from './input/text-input/text-area/text-area.component';
import { ButtonComponent } from './input/button/button.component';
import { LinkButtonComponent } from './input/button/link-button/link-button.component';
import { ContentBlockComponent } from './content-block/content-block.component';

const components = [
  NavigationComponent,
  HeaderComponent,
  FooterComponent,
  MainMenuComponent,
  SocialMenuComponent,
  MobileMenuComponent,
  RowComponent,
  ColumnComponent,
  ImageViewComponent,
  ImageModalComponent,
  ImageCarouselComponent,
  CarouselImageComponent,
  TextInputComponent,
  TextAreaComponent,
  ButtonComponent,
  LinkButtonComponent,
  ContentBlockComponent,
];

@NgModule({
  imports: [CommonModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  declarations: components,
  exports: components,
})
export class ComponentsModule {}
