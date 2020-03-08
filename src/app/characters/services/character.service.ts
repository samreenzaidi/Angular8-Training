import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private _typeSort: string;
  private _filterItems: {
    gender: string[];
    species: string[];
    origin: string[];
  }[];
  public character$: BehaviorSubject<Character[]> = new BehaviorSubject(null);
  public typeSort$: BehaviorSubject<string> = new BehaviorSubject(null);

  public filterItems$: BehaviorSubject<{
    gender: string[];
    species: string[];
    origin: string[];
  }[]> = new BehaviorSubject(null);

  get typeSort() {
    return this._typeSort;
  }

  set typeSort(value: string) {
    this._typeSort = value;
    this.typeSort$.next(this._typeSort);
  }

  get filterItems() {
    return this._filterItems;
  }

  set filterItems(value: { gender: string[]; species: string[]; origin: string[]; }[]) {
    this._filterItems = value;
    this.filterItems$.next(this._filterItems);
  }

  constructor(private http: HttpClient) { }

  getData(): Observable<Character[]> {
    return this.http.get<Character[]>(`${environment.apiEndPoint}/results`);
  }

  searchData(name: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${environment.apiEndPoint}/results?name=${name}`);
  }

  getUpdatedSearchData(value: string) {
    this.searchData(value).subscribe((data: any) => {
      this.character$.next(data);
    });
  }

  getUpdatedData() {
    this.getData().subscribe((data: any) => {
      this.character$.next(data);
    });
  }
}
