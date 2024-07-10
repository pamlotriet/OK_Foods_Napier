import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StaffComponent } from './pages/staff/staff.component';
import { LiquorSpecialsComponent } from './pages/liquor-specials/liquor-specials.component';
import { FoodSpecialsComponent } from './pages/food-specials/food-specials.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'food-specials', component: FoodSpecialsComponent },
  { path: 'liquor-specials', component: LiquorSpecialsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'contact', component: ContactComponent },
];
