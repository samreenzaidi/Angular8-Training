import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  staticData: { name: string; class: number; section: string; sub1: number; sub2: number; sub3: number; }[];
  staticKeys: string[];
  rows: { price: number; }[];
  isActive: string = "list";
  form: FormGroup;
  typeSort: string;


  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'sort': new FormControl("asc")
    })
  }

  ngOnInit(): void {
    this.staticData = [
      {
        name: "Nagendra",
        class: 3,
        section: 'D',
        sub1: 87,
        sub2: 65,
        sub3: 71
      },
      {
        name: "Nagendra1",
        class: 3,
        section: 'E',
        sub1: 87,
        sub2: 65,
        sub3: 71
      },
      {
        name: "Nagendra2",
        class: 3,
        section: 'D',
        sub1: 81,
        sub2: 75,
        sub3: 69
      },
      {
        name: "Nagendra3",
        class: 3,
        section: 'F',
        sub1: 71,
        sub2: 75,
        sub3: 81
      }
    ]

    this.staticKeys = Object.keys(this.staticData[0]);

    this.rows = [
      { price: 100 },
      { price: 300 },
      { price: 20 },
      { price: 300 },
      { price: 800 },
      { price: 10 },
      { price: 150 },
      { price: 40 },
      { price: 3100 },
      { price: 1300 },
      { price: 50 },
      { price: 300 },
      { price: 300 },
      { price: 300 },
      { price: 300 },
      { price: 300 },
      { price: 10 },
      { price: 2200 },
      { price: 120 },
      { price: 2000 }]
  }

  toggle(event, isActive) {
    (isActive == 'list') ? this.isActive = 'grid' : this.isActive = 'list';
  }

  sortRows(e): void {
    this.form.get('sort')
      .valueChanges
      .pipe(startWith(null))
      .subscribe(() => {
        this.typeSort = e.target.value;
      })
  }
}
