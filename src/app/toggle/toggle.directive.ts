import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[toggler]'
})
export class ToggleDirective {

  @HostBinding('attr.role') role = 'switch';

  @HostBinding('attr.aria-checked')
  @Input() on;

  constructor() { }

}
