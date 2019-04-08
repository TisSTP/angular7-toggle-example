import { Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Directive({
  exportAs: 'toggle',
  selector: 'toggle, [toggle]'
})
export class ToggleDirective implements OnChanges {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  @Input('toggleLabel') label: string;

  setOnState(on: boolean) {
    this.on = on;
    this.toggle.emit(this.on);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { label } = changes;
    if (label) {
      console.log(this.label);
    }
  }

}
