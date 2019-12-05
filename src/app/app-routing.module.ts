import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CurrentWeatherComponent} from './current-weather/current-weather.component';
import {ForecastComponent} from './forecast/forecast.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: '', component: LoginComponent},

  { path: 'HomePage', component: HomePageComponent},
  { path: 'CurrentWeather', component: CurrentWeatherComponent},
  { path: 'Forecast', component: ForecastComponent },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
