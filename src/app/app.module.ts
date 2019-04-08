import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchComponent } from './irrelevant-implementation-details/switch.component';
import { MyToggleComponent } from './my-toggle/my-toggle.component';
import { ToggleModule } from './toggle/toggle.module';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    MyToggleComponent
  ],
  imports: [
    BrowserModule,
    ToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
