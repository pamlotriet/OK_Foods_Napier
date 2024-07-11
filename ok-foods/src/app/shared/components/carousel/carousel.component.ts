import { Component, Input, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ResponsiveOption } from '../../models/responsive-options';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, TranslateModule],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit {
  @Input() products: string[] = [];
  responsiveOptions: ResponsiveOption[] = [];

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
