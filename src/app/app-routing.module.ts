import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', loadChildren: './modules/home/home.module#HomeModule'},
  {path:'home', loadChildren: './modules/home/home.module#HomeModule'},
  {path: 'nav', loadChildren: './modules/nav/nav.module#NavModule'},

  {path:'**', loadChildren: './modules/home/home.module#HomeModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
