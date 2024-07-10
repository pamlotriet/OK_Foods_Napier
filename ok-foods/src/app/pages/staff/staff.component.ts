import { Component, inject, OnInit } from '@angular/core';
import { BlobService } from '../../shared/services/blob-service';
import { CardComponent } from '../../shared/components/card/card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CardComponent, TranslateModule],
  templateUrl: './staff.component.html',
})
export class StaffComponent implements OnInit {
  ownerUrl = '';
  managerUrl = '';

  blobService = inject(BlobService);

  async ngOnInit(): Promise<void> {
    this.ownerUrl = await this.blobService.listBlobByNameBlobs(
      'owner.svg',
      'general-images',
    );
    this.managerUrl = await this.blobService.listBlobByNameBlobs(
      'manager.svg',
      'general-images',
    );
  }
}
