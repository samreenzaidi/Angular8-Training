import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedMainComponent } from './components/nested-main/nested-main.component';



@NgModule({
  declarations: [NestedMainComponent],
  imports: [CommonModule],
  exports: [NestedMainComponent],
})
export class NestedDivsModule { }
