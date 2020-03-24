import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-sort',
  templateUrl: './character-sort.component.html',
  styleUrls: ['./character-sort.component.scss']
})
export class CharacterSortComponent {
  characters$: Character[];
  form: FormGroup;

  constructor(private characterService: CharacterService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'sort': new FormControl("")
    })
  }

  sortCharacters(e): void {
    this.form.get('sort')
      .valueChanges
      .pipe(startWith(null))
      .subscribe(() => {
        this.characterService.typeSort = e.target.value;
      })
  }
}
