import { Component, OnInit, Injectable } from '@angular/core';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss']
})
export class CharacterFilterComponent implements OnInit {
  characters$: Character[];
  form: FormGroup;
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
  gender: string[];
  species: string[];
  origin: string[];
  maleControl: FormControl;
  femaleControl: FormControl;
  unknownControl: FormControl;


  constructor(public characterService: CharacterService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      "gender": new FormArray([]),
      "species": new FormArray([]),
      "origin": new FormArray([])
    })
  }

  checked(key, value, event) {
    if (key == 'gender') {
      this.form
        .get('gender')
        .valueChanges
        .pipe(startWith(null))
        .subscribe(() => {
          if (event.target.checked && this.filterItemsChecked[0].gender.indexOf(value) === -1) {
            this.filterItemsChecked[0].gender = [...this.filterItemsChecked[0].gender, value];
          } else if (!event.target.checked && this.filterItemsChecked[0].gender.indexOf(value) > -1) {
            let i = this.filterItemsChecked[0].gender.findIndex(x => x === value);
            this.filterItemsChecked[0].gender.splice(i, 1);
          }
        });
    }
    else if (key == "species") {
      this.form
        .get('species')
        .valueChanges
        .pipe(startWith(null))
        .subscribe(() => {
          if (event.target.checked && this.filterItemsChecked[0].species.indexOf(value) === -1) {
            this.filterItemsChecked[0].species = [...this.filterItemsChecked[0].gender, value];
          } else if (!event.target.checked && this.filterItemsChecked[0].species.indexOf(value) > -1) {
            let i = this.filterItemsChecked[0].species.findIndex(x => x === value);
            this.filterItemsChecked[0].species.splice(i, 1);
          }
        });
    }
    else if (key == "origin") {
      this.form
        .get('origin')
        .valueChanges
        .pipe(startWith(null))
        .subscribe(() => {
          if (event.target.checked && this.filterItemsChecked[0].origin.indexOf(value) === -1) {
            this.filterItemsChecked[0].origin = [...this.filterItemsChecked[0].origin, value];
          } else if (!event.target.checked && this.filterItemsChecked[0].origin.indexOf(value) > -1) {
            let i = this.filterItemsChecked[0].origin.findIndex(x => x === value);
            this.filterItemsChecked[0].origin.splice(i, 1);
          }
        });
    }
    this.characterService.filterItems = this.filterItemsChecked;

  }

  ngOnInit(): void {
    this.characterService.getData().subscribe(value => {
      this.gender = value
        .map(x => x.gender)
        .filter((v, i, self) => {
          return self.indexOf(v) == i;
        });
      this.species = value
        .map(x => x.species)
        .filter((v, i, self) => {
          return self.indexOf(v) == i;
        })
      this.origin = value
        .map(x => x.origin.name)
        .filter((v, i, self) => {
          return self.indexOf(v) == i;
        })
      this.filterItems = [{
        gender: [...this.gender],
        species: [...this.species],
        origin: [...this.origin]
      }]
      this.filterItemsChecked = JSON.parse(JSON.stringify(this.filterItems));
      this.characterService.filterItems = this.filterItemsChecked;
    })

    this.characterService.filterItems$.subscribe((value: { gender: string[]; species: string[]; origin: string[]; }[]) => {
      if (value) {
        value[0].gender.forEach((o, i) => {
          const genderControl = new FormControl(true);
          (this.form.controls.gender as FormArray).setControl(i, genderControl);
        });

        value[0].species.forEach((o, i) => {
          const speciesControl = new FormControl(true);
          (this.form.controls.species as FormArray).setControl(i, speciesControl);
        });

        value[0].origin.forEach((o, i) => {
          const originControl = new FormControl(true);
          (this.form.controls.origin as FormArray).setControl(i, originControl);
        });
      }
    });
  }
}
