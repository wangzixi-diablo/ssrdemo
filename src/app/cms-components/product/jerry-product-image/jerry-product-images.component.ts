import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { MediaModule, OutletModule, CarouselModule } from '@spartacus/storefront';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-images',
  templateUrl: './jerry-product-images.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JerryProductImagesComponent {
  
}


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    OutletModule,
    CarouselModule
  ],
  declarations:[JerryProductImagesComponent]
})
export class RazerProductImagesModule {}