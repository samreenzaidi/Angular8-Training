import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters$: Character[];
  charactersSubscription: Subscription;
  typeSortSubscription: Subscription;
  filterItemsSubscription: Subscription;
  typeSort: string;
  form: FormGroup;
  sortControl: FormControl;
  filterControl: FormControl
  filterItems: { gender: string[]; species: string[]; origin: string[]; }[]

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getUpdatedData();
    this.charactersSubscription = this.characterService.character$.subscribe((value: Character[]) => {
      this.characters$ = value
    });
    this.typeSortSubscription = this.characterService.typeSort$.subscribe((value: string) => {
      this.typeSort = value
    });
    this.filterItemsSubscription = this.characterService.filterItems$.subscribe((value: { gender: string[]; species: string[]; origin: string[]; }[]) => {
      this.filterItems = value
    });
  }
}
