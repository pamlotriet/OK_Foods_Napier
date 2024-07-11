import { Component, inject, OnInit } from '@angular/core';
import { BlobService } from '../../shared/services/blob-service';
import { CardComponent } from '../../shared/components/card/card.component';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../envitonments/environment';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-liquor-specials',
  standalone: true,
  imports: [CardComponent, TranslateModule, CarouselComponent],
  templateUrl: './liquor-specials.component.html',
})
export class LiquorSpecialsComponent implements OnInit {
  azureBlobService = inject(BlobService);
  viewAll = false;
  blobUrls: string[] = [];

  private alcUrl = environment.liquorSpecialsUrl;
  private alcSas = environment.liquorSpecialsSas;

  ngOnInit(): void {
    this.azureBlobService
      .listBlobs(this.alcUrl, this.alcSas)
      .subscribe((blobUrls) => {
        this.blobUrls = blobUrls;
      });
  }

  toggleViewAll() {
    this.viewAll = !this.viewAll;
  }
}
