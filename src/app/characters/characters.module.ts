import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CharacterFilterComponent } from './components/character-filter/character-filter.component';
import { CharacterSortComponent } from './components/character-sort/character-sort.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterFilterComponent,
    CharacterSortComponent,
    CharacterSearchComponent   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    CharacterListComponent,
    CharacterFilterComponent,
    CharacterSortComponent,
    CharacterSearchComponent
  ]
})
export class CharactersModule { }
