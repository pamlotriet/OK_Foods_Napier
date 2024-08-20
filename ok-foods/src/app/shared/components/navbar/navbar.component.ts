import {
  Component,
  Inject,
  PLATFORM_ID,
  OnInit,
  Renderer2,
} from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '@environments/environment';
import { BlobService } from '../../services/blob-service';
import { isPlatformBrowser } from '@angular/common';
import { buttonTexts } from 'app/shared/constants/navbar.constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SideBarComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  imageUrl = '';
  buttontexts = buttonTexts;
  private containerUrl = environment.generalUrl;
  private containerSas = environment.generalSas;
  private logoName = environment.logoName;

  isMobile = false;

  constructor(
    private router: Router,
    private azureBlobService: BlobService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize(window.innerWidth);
      this.renderer.listen('window', 'resize', (event: Event) => {
        if (event && event.target) {
          const width = (event.target as Window).innerWidth;
          this.checkScreenSize(width);
        }
      });
    }
    // Uncomment this part if you want to load the image
    this.azureBlobService
      .getBlobByName(this.containerUrl, this.containerSas, this.logoName)
      .subscribe((url) => {
        this.imageUrl = url;
      });
  }

  private checkScreenSize(width: number): void {
    this.isMobile = width <= 768;
  }

  routeHome() {
    this.router.navigate(['']);
  }
}
