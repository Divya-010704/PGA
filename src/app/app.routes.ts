import { Routes, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

// ✅ Importing all existing components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';
import { EducationalComponent } from './educational/educational.component';
import { AnimalCrueltyComponent } from './animal-cruelty/animal-cruelty.component';
import { ArtCraftComponent } from './art-craft/art-craft.component';
import { CrimeSceneComponent } from './crime-scene/crime-scene.component';
import { DisturbingNewsComponent } from './disturbing-news/disturbing-news.component';
import { DrugUseComponent } from './drug-use/drug-use.component';
import { EntertainmentTravelComponent } from './entertainment-travel/entertainment-travel.component';
import { HorrorScaryComponent } from './horror-scary/horror-scary.component';
import { InspirationalFiguresComponent } from './inspirational-figures/inspirational-figures.component';
import { InspirationalQuotesComponent } from './inspirational-quotes/inspirational-quotes.component';
import { MedicalAnatomyComponent } from './medical-anatomy/medical-anatomy.component';
import { NatureLandscapesComponent } from './nature-landscapes/nature-landscapes.component';
import { SunrisesSunsetsComponent } from './sunrises-sunsets/sunrises-sunsets.component';
import { TerroristComponent } from './terrorist/terrorist.component';
import { ToysGamesComponent } from './toys-games/toys-games.component';
import { ViolenceWeaponsComponent } from './violence-weapons/violence-weapons.component';
import { FoodComponent } from './food/food.component';
import { DevotionalComponent } from './devotional/devotional.component';

import { UploadComponent } from './upload/upload.component';

// ✅ Define all routes (without changing existing code)
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'educational', component: EducationalComponent },
  { path: 'animal-cruelty', component: AnimalCrueltyComponent },
  { path: 'art-craft', component: ArtCraftComponent },
  { path: 'crime-scene', component: CrimeSceneComponent },
  { path: 'disturbing-news', component: DisturbingNewsComponent },
  { path: 'drug-use', component: DrugUseComponent },
  { path: 'entertainment-travel', component: EntertainmentTravelComponent },
  { path: 'horror-scary', component: HorrorScaryComponent },
  { path: 'inspirational-figures', component: InspirationalFiguresComponent },
  { path: 'inspirational-quotes', component: InspirationalQuotesComponent },
  { path: 'medical-anatomy', component: MedicalAnatomyComponent },
  { path: 'nature-landscapes', component: NatureLandscapesComponent },
  { path: 'sunrises-sunsets', component: SunrisesSunsetsComponent },
  { path: 'terrorist', component: TerroristComponent },
  { path: 'toys-games', component: ToysGamesComponent },
  { path: 'violence-weapons', component: ViolenceWeaponsComponent },
  { path: 'food', component: FoodComponent },
  { path: 'devotional', component: DevotionalComponent },
  
  { path: '**', redirectTo: '' } 
];

// ✅ Bootstrap the Application (Without app.module.ts)
bootstrapApplication(HomeComponent, {
  providers: [provideRouter(routes), provideHttpClient()]
});
