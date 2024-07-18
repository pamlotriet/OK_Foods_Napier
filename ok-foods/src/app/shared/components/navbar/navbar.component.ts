import { Component, HostListener, inject, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '@environments/environment';
import { BlobService } from '../../services/blob-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SideBarComponent, TranslateModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  router = inject(Router);
  azureBlobService = inject(BlobService);

  imageUrl = '';

  private containerUrl = environment.generalUrl;
  private containerSas = environment.generalSas;
  private logoName = environment.logoName;

  isMobile = false;

  ngOnInit(): void {
    this.azureBlobService
    .getBlobByName(this.containerUrl, this.containerSas, this.logoName)
    .subscribe((url) => {
      this.imageUrl = url;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (event && event.target) {
      const width = (event.target as Window).innerWidth;
      this.checkScreenSize(width);
    }
  }

  constructor() {
    this.checkScreenSize(window.innerWidth);
  }

  private checkScreenSize(width: number): void {
    this.isMobile = width <= 768;
  }

  routeHome() {
    this.router.navigate(['']);
  }
}
