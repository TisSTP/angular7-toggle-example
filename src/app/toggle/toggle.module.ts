import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwitchComponent } from '../irrelevant-implementation-details/switch.component';
import { ToggleButtonComponent } from './toggle-button.component';
import { ToggleOffComponent } from './toggle-off.component';
import { ToggleOnComponent } from './toggle-on.component';
import { ToggleComponent } from './toggle.component';


@NgModule({
  declarations: [
    ToggleComponent,
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleComponent,
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent
  ]
})
export class ToggleModule {
}
