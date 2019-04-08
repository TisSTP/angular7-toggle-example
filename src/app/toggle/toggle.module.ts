import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import { ToggleDirective } from './toggle.directive';

@NgModule({
  declarations: [
    ToggleComponent,
    ToggleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleComponent,
    ToggleDirective
  ]
})
export class ToggleModule { }
