import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterMorningComponent } from './register-morning.component';

const routes: Routes = [{
  path: '',
  component: RegisterMorningComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterMorningRoutingModule { }
