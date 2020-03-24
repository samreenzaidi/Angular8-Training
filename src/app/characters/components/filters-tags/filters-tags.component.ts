import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharacterService } from '../../services/character.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CharacterFilterComponent } from '../character-filter/character-filter.component';

@Component({
  selector: 'app-filters-tags',
  templateUrl: './filters-tags.component.html',
  styleUrls: ['./filters-tags.component.scss']
})
export class FiltersTagsComponent implements OnInit {
  filterTags: { gender: string[]; species: string[]; origin: string[]; }[];
  form: FormGroup;
  filterControl: FormControl;

  constructor(private characterService: CharacterService, private formBuilder: FormBuilder, private characterFilterComponent: CharacterFilterComponent) {
  }

  removeFilter(key, value) {
    if (key == 'gender') {
      if (this.filterTags[0].gender.indexOf(value) > -1) {
        let i = this.filterTags[0].gender.findIndex(x => x === value);
        this.filterTags[0].gender.splice(i, 1);
      }
    }
    else if (key == "species") {
      if (this.filterTags[0].species.indexOf(value) > -1) {
        let i = this.filterTags[0].species.findIndex(x => x === value);
        this.filterTags[0].species.splice(i, 1);
      }
    }
    else if (key == "origin") {
      if (this.filterTags[0].origin.indexOf(value) > -1) {
        let i = this.filterTags[0].origin.findIndex(x => x === value);
        this.filterTags[0].origin.splice(i, 1);
      }
    }
    this.characterService.filterItems = this.filterTags;
  }

  ngOnInit(): void {
    this.characterService.filterItems$.subscribe((value: { gender: string[]; species: string[]; origin: string[]; }[]) => {
      this.filterTags = value
    });
  }
}
