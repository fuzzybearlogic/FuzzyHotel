import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { CelebrationsComponent } from './events/celebrations/celebrations.component';
import { WeddingsComponent } from './events/weddings/weddings.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'accomodation', component: AccommodationComponent },
  { path: 'celebrations', component: CelebrationsComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'food-beverage', component: FoodBeverageComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
