import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  myLabel: string = 'The toggle is';
  someOtherText: string = 'Some other text';

  onToggle(message, on) {
    console.log(message, on);
  }
}
