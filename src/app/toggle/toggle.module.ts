import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwitchComponent } from '../irrelevant-implementation-details/switch.component';
import { ToggleButtonComponent } from './toggle-button.component';
import { ToggleOffComponent } from './toggle-off.component';
import { ToggleOnComponent } from './toggle-on.component';
import { ToggleProviderDirective } from './toggle-provider.directive';
import { ToggleDirective } from './toggle.directive';


@NgModule({
  declarations: [
    ToggleDirective,
    ToggleProviderDirective,
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent,
    SwitchComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleDirective,
    ToggleProviderDirective,
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent
  ]
})
export class ToggleModule {
}
