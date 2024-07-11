import { Component, HostListener, inject } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SideBarComponent, TranslateModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  router = inject(Router);

  isMobile = false;

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
