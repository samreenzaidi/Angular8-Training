import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {  Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters$: Character[];
  charactersSubscription: Subscription;
  typeSortSubscription:Subscription;
  genderSubscription:Subscription;
  speciesSubscription:Subscription;
  originSubscription:Subscription;
  filterKeySubscription: Subscription;
  typeSort:string;
  filterItems:string[];
  form: FormGroup;
  sortControl: FormControl;
  filterControl: FormControl
  genderItems: string[];
  speciesItems: string[];
  originItems: string[];
  filterKey: string;
  
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getUpdatedData();
    this.charactersSubscription = this.characterService.character$.subscribe((value: Character[]) => {
      this.characters$ = value
    });
    this.typeSortSubscription=this.characterService.typeSort$.subscribe((value:string)=>{
      this.typeSort = value
    });
    this.genderSubscription = this.characterService.genderItems$.subscribe((value:string[])=>{
      this.genderItems=value
    });
    this.speciesSubscription = this.characterService.speciesItems$.subscribe((value:string[])=>{
      this.speciesItems=value
    });
    this.originSubscription = this.characterService.originItems$.subscribe((value:string[])=>{
      this.originItems=value
    });
    this.filterKeySubscription = this.characterService.filterKey$.subscribe((value:string)=>{
      this.filterKey=value
    });
  }
}
