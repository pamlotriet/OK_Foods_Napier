import { Component, inject, OnInit } from '@angular/core';
import { BlobService } from '../../shared/services/blob-service';
import { CardComponent } from '../../shared/components/card/card.component';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '@environments/environment';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-food-specials',
  standalone: true,
  imports: [CardComponent, TranslateModule, CarouselComponent],
  templateUrl: './food-specials.component.html',
})
export class FoodSpecialsComponent implements OnInit {
  azureBlobService = inject(BlobService);
  alcUrls: string[] = [];
  foodUrls: string[] = [];
  viewAllFood = false;
  viewAllAlc = false;
  viewAll = false;
  private foodUrl = environment.foodSpecialsUrl;
  private foodSas = environment.foodSpecialsSas;
  private alcUrl = environment.liquorSpecialsUrl;
  private alcSas = environment.liquorSpecialsSas;

  ngOnInit(): void {
    this.azureBlobService
      .listBlobs(this.foodUrl, this.foodSas)
      .subscribe((blobUrls) => {
        this.foodUrls = blobUrls;
      });

    this.azureBlobService
      .listBlobs(this.alcUrl, this.alcSas)
      .subscribe((blobUrls) => {
        this.alcUrls = blobUrls;
      });
  }

  toggleViewAll(type: string) {
    switch (type) {
      case 'food':
        this.viewAll = !this.viewAll;
        this.viewAllFood = !this.viewAllFood;
        break;
      case 'alc':
        this.viewAll = !this.viewAll;
        this.viewAllAlc = !this.viewAllAlc;
        break;
      default:
        this.viewAll = false;
        this.viewAllFood = false;
        this.viewAllAlc = false;
        break;
    }
  }
}
