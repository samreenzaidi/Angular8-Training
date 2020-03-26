import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountdownHomeComponent } from './components/countdown-home/countdown-home.component';
import { CountdownModule } from './countdown.module';


const routes: Routes = [
  {
    path: '',
    component: CountdownHomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CountdownRoutingModule { }
