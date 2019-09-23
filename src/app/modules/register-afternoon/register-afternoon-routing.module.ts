import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterAfternoonComponent } from './register-afternoon.component';

const routes: Routes = [{
  path: '', component: RegisterAfternoonComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterAfternoonRoutingModule { }
