import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { filter, startWith, debounceTime, distinctUntilChanged, } from 'rxjs/operators';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss']
})
export class CharacterFilterComponent implements OnInit {
  characters$: Character[];
  form: FormGroup;
  filterControl: FormControl;
  filterItems: [{
    gender: string[];
    species: string[];
    origin: string[]
  }];
  filterItemsChecked: [{
    gender: string[];
    species: string[];
    origin: string[];
  }];


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
        if (key == 'gender') {
          if (event.target.checked && this.filterItemsChecked[0].gender.indexOf(value) === -1) {
            this.filterItemsChecked[0].gender = [...this.filterItemsChecked[0].gender, value];
          } else if (!event.target.checked && this.filterItemsChecked[0].gender.indexOf(value) > -1) {
            let i = this.filterItemsChecked[0].gender.findIndex(x => x === value);
            this.filterItemsChecked[0].gender.splice(i, 1);
          }
        }
        else if (key == "species") {
          if (event.target.checked && this.filterItemsChecked[0].species.indexOf(value) === -1) {
            this.filterItemsChecked[0].species = [...this.filterItemsChecked[0].gender, value];
          } else if (!event.target.checked && this.filterItemsChecked[0].species.indexOf(value) > -1) {
            let i = this.filterItemsChecked[0].species.findIndex(x => x === value);
            this.filterItemsChecked[0].species.splice(i, 1);
          }
        }
        else if (key == "origin") {
          if (event.target.checked && this.filterItemsChecked[0].origin.indexOf(value) === -1) {
            this.filterItemsChecked[0].origin = [...this.filterItemsChecked[0].origin, value];
          } else if (!event.target.checked && this.filterItemsChecked[0].origin.indexOf(value) > -1) {
            let i = this.filterItemsChecked[0].origin.findIndex(x => x === value);
            this.filterItemsChecked[0].origin.splice(i, 1);
          }
        }
        this.characterService.filterItems = this.filterItemsChecked;
      });
  }

  ngOnInit(): void {
    this.characterService.getData().subscribe(value => {
      this.filterItems = [{
        gender: value
          .map(x => x.gender)
          .filter(function (v, i, self) {
            return self.indexOf(v) == i;
          }),
        species: value
          .map(x => x.species)
          .filter(function (v, i, self) {
            return self.indexOf(v) == i;
          }),
        origin: value
          .map(x => x.origin.name)
          .filter(function (v, i, self) {
            return self.indexOf(v) == i;
          })
      }]
      this.filterItemsChecked = JSON.parse(JSON.stringify(this.filterItems));
    })

  }
}
