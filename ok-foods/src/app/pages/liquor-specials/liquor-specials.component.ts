import { Component, inject, OnInit } from '@angular/core';
import { BlobService } from '../../shared/services/blob-service';
import { CardComponent } from '../../shared/components/card/card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-liquor-specials',
  standalone: true,
  imports: [CardComponent, TranslateModule],
  templateUrl: './liquor-specials.component.html',
})
export class LiquorSpecialsComponent implements OnInit {
  blobService = inject(BlobService);
  blobUrls: string[] = [];
  containerName = 'alcohol-specials';
  ngOnInit(): void {
    this.loadBlobUrls();
  }

  async loadBlobUrls() {
    try {
      this.blobUrls = await this.blobService.listfoodBlobs(this.containerName);
      console.log('Blob URLs:', this.blobUrls);
    } catch (error) {
      console.error('Error fetching blob URLs:', error);
    }
  }
}
