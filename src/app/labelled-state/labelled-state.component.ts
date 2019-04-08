import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-labelled-state',
  template: `
    <div>
      {{ toggleName }} toggle is:
      <toggle-on>on</toggle-on>
      <toggle-off>off</toggle-off>
    </div>
  `,
  styles: []
})
export class LabelledStateComponent {
  @Input() toggleName: string;
}
