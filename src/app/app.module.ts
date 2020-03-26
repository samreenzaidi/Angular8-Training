import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CharactersModule } from './characters/characters.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from './table/table.module';
import { HeaderComponent } from './components/header/header.component';
import { NestedDivsModule } from './nested-divs/nested-divs.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CharactersModule,
    TableModule,
    NestedDivsModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent
  ]
})
export class AppModule { }
