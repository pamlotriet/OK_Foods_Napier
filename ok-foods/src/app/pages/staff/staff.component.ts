import { Component, inject, OnInit } from '@angular/core';
import { BlobService } from '../../shared/services/blob-service';
import { CardComponent } from '../../shared/components/card/card.component';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '@environments/environment';


@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CardComponent, TranslateModule],
  templateUrl: './staff.component.html',
})
export class StaffComponent implements OnInit {
  ownerUrl = '';
  managerUrl = '';
  test = 'ß'

  azureBlobService = inject(BlobService);

  private containerUrl = environment.generalUrl;
  private containerSas = environment.generalSas;
  private ownerName = environment.ownerName;
  private managerName = environment.managerName;

  ngOnInit(): void {
    this.azureBlobService
      .getBlobByName(this.containerUrl, this.containerSas, this.ownerName)
      .subscribe((url) => {
        this.ownerUrl = url;
      });

    this.azureBlobService
      .getBlobByName(this.containerUrl, this.containerSas, this.managerName)
      .subscribe((url) => {
        this.managerUrl = url;
      });
  }
}
