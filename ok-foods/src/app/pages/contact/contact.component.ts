import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import {
  contactHeading,
  tradingHoursHeading,
  tradingHours,
  contactInfo,
  buttonInfo,
  contactSubheading,
} from 'app/shared/constants/contact.constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contactHeading = contactHeading;
  contactSubheading = contactSubheading;
  tradingHoursHeading = tradingHoursHeading;
  tradingHours = tradingHours;
  contactInfo = contactInfo;
  buttonInfo = buttonInfo;

  navigateToDirections() {
    window.location.href =
      'https://www.google.co.za/maps/dir//69+Sarel+Cilliers+St,+Napier,+7270/@-34.4725218,19.8971153,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1dd1ec55af3da4cf:0x97f759976af8ee6d!2m2!1d19.8996902!2d-34.4725262?hl=en&entry=ttu';
  }
}
