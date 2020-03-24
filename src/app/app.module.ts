import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CharactersModule } from './characters/characters.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from './table/table.module';
import { CountdownModule } from './countdown/countdown.module';
import { TableComponent } from './table/components/table/table.component';
import { Route, RouterModule } from '@angular/router';
import { CountdownLimitComponent } from './countdown/components/countdown-limit/countdown-limit.component';
import { HeaderComponent } from './components/header/header.component';
import { CountdownHomeComponent } from './countdown/components/countdown-home/countdown-home.component';
import { NestedDivsModule } from './nested-divs/nested-divs.module';
import { HomeComponent } from './nested-divs/components/home/home.component';


const routes: Route[] = [
  {
      path: '',
      component: TableComponent
  },
  {
      path: 'countdown',
      component: CountdownHomeComponent
  },
  {
      path: 'nesteddivs',
      component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CharactersModule,
    TableModule,
    CountdownModule,
    NestedDivsModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent
  ]
})
export class AppModule { }
