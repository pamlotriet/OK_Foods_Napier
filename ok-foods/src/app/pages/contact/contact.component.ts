import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, CardComponent, ButtonComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  translate = inject(TranslateService);
  sTradingHourContent = toSignal(this.translate.get('contact.tradingHours'));
  sContactContent = toSignal(this.translate.get('contact.contactInfo'));

  navigateToDirections() {
    window.location.href =
      'https://www.google.co.za/maps/dir//69+Sarel+Cilliers+St,+Napier,+7270/@-34.4725218,19.8971153,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1dd1ec55af3da4cf:0x97f759976af8ee6d!2m2!1d19.8996902!2d-34.4725262?hl=en&entry=ttu';
  }
}
