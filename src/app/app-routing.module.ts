import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: './modules/home/home.module#HomeModule'},
  {path:'home', loadChildren: './modules/home/home.module#HomeModule'},
  {path:'registerMorning', loadChildren: './modules/register-morning/register-morning.module#RegisterMorningModule'},
  {path:'registerAfternoon', loadChildren: './modules/register-afternoon/register-afternoon.module#RegisterAfternoonModule'},
  {path:'onboarding', loadChildren: './modules/onboarding/onboarding.module#OnboardingModule'},
  {path:'tracker', loadChildren: './modules/tracker/tracker.module#TrackerModule'},
  {path:'**', loadChildren: './modules/home/home.module#HomeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
