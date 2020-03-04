import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { filter, startWith } from 'rxjs/operators';
import { CharacterService } from '../../services/character.service';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-sort',
  templateUrl: './character-sort.component.html',
  styleUrls: ['./character-sort.component.scss']
})
export class CharacterSortComponent implements OnInit {
  characters$: Character[];
  form: FormGroup;
  sortControl: FormControl;

  constructor(private characterService: CharacterService, private formBuilder: FormBuilder) {
    this.sortControl = new FormControl("");
    this.form = this.formBuilder.group({
      'sort': this.sortControl
    })
  }


  sortCharacters(e): void {
    this.sortControl
      .valueChanges
      .pipe(startWith(null))
      .subscribe((value) => {
        this.characterService.typeSort = e.target.value;
      })
  }

  ngOnInit(): void {

  }
}
