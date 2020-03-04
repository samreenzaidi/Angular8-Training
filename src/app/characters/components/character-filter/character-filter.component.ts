import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { filter, startWith, debounceTime, distinctUntilChanged, } from 'rxjs/operators';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss']
})
export class CharacterFilterComponent implements OnInit {
  characters$: Character[];
  filteredArr: Character[];
  form: FormGroup;
  filterControl: FormControl;
  genders: string[];
  species: string[];
  origins: string[];
  filterKeyArr: string[] = [];
  filterValueArr: string[] = [];
  filterItems: string[] = [];
  gender: string[]
  speciesChecked: string[];
  gendersChecked: string[];
  originChecked: string[];
  filterKey: string;

  constructor(private characterService: CharacterService, private formBuilder: FormBuilder) {
    this.filterControl = new FormControl(true);
    this.form = this.formBuilder.group({
      'filter': this.filterControl
    })
  }

  checked(key, value, event) {
    this.filterControl
      .valueChanges
      .pipe(startWith(null))
      .subscribe(() => {
        this.filterKey=key;
        if (key == 'gender') {
          if (event.target.checked && this.gendersChecked.indexOf(value) === -1) {
            this.gendersChecked = [...this.gendersChecked, value]
          } else if (!event.target.checked && this.gendersChecked.indexOf(value) > -1) {
            let i = this.gendersChecked.findIndex(x => x === value);
            this.gendersChecked.splice(i, 1);
          }
        }
        else if (key == "species") {
          if (event.target.checked && this.speciesChecked.indexOf(value) === -1) {
            this.speciesChecked = [...this.speciesChecked, value]
          } else if (!event.target.checked && this.speciesChecked.indexOf(value) > -1) {
            let i = this.speciesChecked.findIndex(x => x === value);
            this.speciesChecked.splice(i, 1);
          }
        }
        else if (key == "origin") {
          if (event.target.checked && this.originChecked.indexOf(value) === -1) {
            this.originChecked = [...this.originChecked, value]
          } else if (!event.target.checked && this.originChecked.indexOf(value) > -1) {
            let i = this.originChecked.findIndex(x => x === value);
            this.originChecked.splice(i, 1);
          }
        }
      })
      this.characterService.genderItems = this.gendersChecked;
      this.characterService.speciesItems = this.speciesChecked;
      this.characterService.originItems = this.originChecked;
      this.characterService.filterKey = this.filterKey;
  }

  ngOnInit(): void {
    this.characterService.getData().subscribe(value => {
      this.genders = value
        .map(x => x.gender)
        .filter(function (v, i, self) {
          return self.indexOf(v) == i;
        });
      this.gendersChecked = [...this.genders];
      this.species = value
        .map(x => x.species)
        .filter(function (v, i, self) {
          return self.indexOf(v) == i;
        });
      this.speciesChecked = [...this.species];
      this.origins = value
        .map(x => x.origin.name)
        .filter(function (v, i, self) {
          return self.indexOf(v) == i;
        });
      this.originChecked = [...this.origins];
    })
  }
}
