import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { LastcreatedPipe } from './pipes/lastcreated.pipe';

@NgModule({
  declarations: [
    FilterPipe,
    SortPipe,
    LastcreatedPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FilterPipe,
    SortPipe,
    LastcreatedPipe,
  ]
})
export class SharedModule { }
