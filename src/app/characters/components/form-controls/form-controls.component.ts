import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { filter, startWith } from 'rxjs/operators';
import { CharacterService } from '../../services/character.service';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { Character } from '../../models/character';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent implements OnInit {
  characters$: Character[];
  form: FormGroup;
  searchControl: FormControl;
  sortControl: FormControl;

  constructor(private characterService: CharacterService, private formBuilder: FormBuilder) {
    this.searchControl = new FormControl("");
    this.sortControl = new FormControl("");
    this.form = this.formBuilder.group({
      'search': this.searchControl,
      'sort': this.sortControl
    })
  }

  searchCharacter(): void {
    this.characterService.getUpdatedSearchData(this.searchControl.value);
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
    this.searchControl
      .valueChanges
      .pipe(filter(value => !value))// empty strings are true
      .subscribe(() => {
        of(this.characters$).subscribe(() => this.characterService.getUpdatedData());
      })
  }
}
