import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FormControlsComponent } from './components/form-controls/form-controls.component';
import { CharacterFilterComponent } from './components/character-filter/character-filter.component';




@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterFilterComponent,
    FormControlsComponent    
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
    FormControlsComponent
  ]
})
export class CharactersModule { }
