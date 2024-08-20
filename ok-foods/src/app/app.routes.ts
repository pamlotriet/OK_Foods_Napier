import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StaffComponent } from './pages/staff/staff.component';
import { FoodSpecialsComponent } from './pages/food-specials/food-specials.component';
import { Routes } from '@angular/router';
import { UpdatesComponent } from './pages/updates/updates.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'food-specials', component: FoodSpecialsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'updates', component: UpdatesComponent },
];
