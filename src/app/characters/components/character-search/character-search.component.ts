import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { CharacterService } from '../../services/character.service';
import { of } from 'rxjs';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})

export class CharacterSearchComponent implements OnInit {
  characters: Character[];
  form: FormGroup;

  constructor(private characterService: CharacterService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'search': new FormControl("")
    })
  }

  searchCharacter(): void {
    this.characterService.getUpdatedSearchData(this.form.get("search").value);
  }

  ngOnInit(): void {
    this.form.get('search')
      .valueChanges
      .pipe(filter(value => !value))// empty strings are true
      .subscribe(() => {
        of(this.characters).subscribe(() => this.characterService.getUpdatedData());
      })
  }
}

