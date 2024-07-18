import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { BlobService } from '../../shared/services/blob-service';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';


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

  routeToFoodSpecials() {
    this.router.navigate(['/food-specials']);
  }

  routeToContact() {
    this.router.navigate(['/contact']);
  }
}
