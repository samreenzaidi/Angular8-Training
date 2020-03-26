import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { TableComponent } from './table/components/table/table.component';
import { NestedMainComponent } from './nested-divs/components/nested-main/nested-main.component';


const routes: Route[] = [
  {
    path: '',
    component: TableComponent
  },
  {
    path: 'nesteddivs',
    component: NestedMainComponent
  },
  {
    path: 'countdown',
    loadChildren: () => import('./countdown/countdown-routing.module').then(m => m.CountdownRoutingModule)
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
