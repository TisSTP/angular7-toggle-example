import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleModule } from './toggle/toggle.module';
import { LabelledButtonComponent } from './labelled-button/labelled-button.component';
import { LabelledStateComponent } from './labelled-state/labelled-state.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelledButtonComponent,
    LabelledStateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
