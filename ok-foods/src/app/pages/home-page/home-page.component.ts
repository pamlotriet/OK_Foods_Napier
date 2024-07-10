import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { BlobService } from '../../shared/services/blob-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardComponent, TranslateModule, ButtonComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  blobService = inject(BlobService);
  router = inject(Router);

  imageUrlFoods = '';
  imageUrlLiquor = '';
  imageUrlContact = '';

  async ngOnInit(): Promise<void> {
    this.imageUrlLiquor = await this.blobService.listBlobByNameBlobs(
      'alcCard.svg',
      'general-images',
    );
    this.imageUrlFoods = await this.blobService.listBlobByNameBlobs(
      'foodCard.svg',
      'general-images',
    );
    this.imageUrlContact = await this.blobService.listBlobByNameBlobs(
      'contactCard.svg',
      'general-images',
    );
  }

  routeToFoodSpecials() {
    this.router.navigate(['/food-specials']);
  }

  routeToLiquorSpecials() {
    this.router.navigate(['/liquor-specials']);
  }

  routeToContact() {
    this.router.navigate(['/contact']);
  }
}
