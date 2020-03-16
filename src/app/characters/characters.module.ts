import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CharacterFilterComponent } from './components/character-filter/character-filter.component';
import { CharacterSortComponent } from './components/character-sort/character-sort.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';
import { FiltersTagsComponent } from './components/filters-tags/filters-tags.component';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterFilterComponent,
    CharacterSortComponent,
    CharacterSearchComponent,
    FiltersTagsComponent   
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
    CharacterSearchComponent,
    FiltersTagsComponent
  ]
})
export class CharactersModule { }
