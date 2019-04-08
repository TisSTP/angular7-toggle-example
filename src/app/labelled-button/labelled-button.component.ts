import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-labelled-button',
  template: `
    <div>
      {{ toggleName }}
      <toggle-button style="display: inline-block; vertical-align: middle"></toggle-button>
    </div>
  `,
  styles: []
})
export class LabelledButtonComponent {
  @Input() toggleName: string;
}
