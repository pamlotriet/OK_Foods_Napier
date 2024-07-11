import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { BlobService } from '../../shared/services/blob-service';
import { Router } from '@angular/router';
import { environment } from '../../../envitonments/environment';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardComponent, TranslateModule, ButtonComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  azureBlobService = inject(BlobService);
  router = inject(Router);

  imageUrlFoods = '';
  imageUrlLiquor = '';
  imageUrlContact = '';

  private containerUrl = environment.generalUrl;
  private containerSas = environment.generalSas;
  private foodImageName = environment.foodImageName;
  private liquorImageName = environment.liquorImageName;
  private contactImageName = environment.contactImageName;

  ngOnInit(): void {
    this.azureBlobService
      .getBlobByName(this.containerUrl, this.containerSas, this.foodImageName)
      .subscribe((url) => {
        this.imageUrlFoods = url;
      });

    this.azureBlobService
      .getBlobByName(this.containerUrl, this.containerSas, this.liquorImageName)
      .subscribe((url) => {
        this.imageUrlLiquor = url;
      });

    this.azureBlobService
      .getBlobByName(
        this.containerUrl,
        this.containerSas,
        this.contactImageName,
      )
      .subscribe((url) => {
        this.imageUrlContact = url;
      });
  }

  // async ngOnInit(): Promise<void> {
  //   this.imageUrlLiquor = await this.blobService.listBlobByNameBlobs(
  //     'alcCard.svg',
  //     'general-images',
  //   );
  //   this.imageUrlFoods = await this.blobService.listBlobByNameBlobs(
  //     'foodCard.svg',
  //     'general-images',
  //   );
  //   this.imageUrlContact = await this.blobService.listBlobByNameBlobs(
  //     'contactCard.svg',
  //     'general-images',
  //   );
  // }

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
