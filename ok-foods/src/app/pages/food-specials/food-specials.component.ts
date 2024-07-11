import { Component, inject, OnInit } from '@angular/core';
import { BlobService } from '../../shared/services/blob-service';
import { CardComponent } from '../../shared/components/card/card.component';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../envitonments/environment';

@Component({
  selector: 'app-food-specials',
  standalone: true,
  imports: [CardComponent, TranslateModule],
  templateUrl: './food-specials.component.html',
})
export class FoodSpecialsComponent implements OnInit {
  azureBlobService = inject(BlobService);
  blobUrls: string[] = [];

  private foodUrl = environment.foodSpecialsUrl;
  private foodSas = environment.foodSpecialsSas;

  ngOnInit(): void {
    this.azureBlobService
      .listBlobs(this.foodUrl, this.foodSas)
      .subscribe((blobUrls) => {
        this.blobUrls = blobUrls;
      });
  }
}
