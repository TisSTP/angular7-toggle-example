import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-toggle',
  template: `
    <button (click)="toggle.emit()">
      {{ on ? 'on' : 'off' }}
    </button>
  `,
  styles: []
})
export class MyToggleComponent {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<any> = new EventEmitter();
}
