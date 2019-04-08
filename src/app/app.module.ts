import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleModule } from './toggle/toggle.module';

@NgModule({
  declarations: [
    AppComponent
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
