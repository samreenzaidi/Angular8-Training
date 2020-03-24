import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters$: Character[];
  typeSort: string;
  filterItems: { gender: string[]; species: string[]; origin: string[]; }[];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getData().subscribe((value: Character[]) => {
      this.characters$ = value
    });

    this.characterService.character$.subscribe((value: Character[]) => {
      this.characters$ = value
    });

    this.characterService.typeSort$.subscribe((value: string) => {
      this.typeSort = value
    });

    this.characterService.filterItems$.subscribe((value: { gender: string[]; species: string[]; origin: string[]; }[]) => {
      this.filterItems = value
    });
  }


}
