import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { buttonTexts } from 'app/shared/constants/navbar.constants';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    RouterLink,
    RouterLinkActive,
    TranslateModule,
  ],
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent {
  sidebarVisible = false;
  buttontexts = buttonTexts;
  toggleSideBar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
