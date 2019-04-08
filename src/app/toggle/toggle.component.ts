import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html'
})
export class ToggleComponent {
  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  onClick() {
    this.on = !this.on;
    this.toggled.emit(this.on);
  }
}
