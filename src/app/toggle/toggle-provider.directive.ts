import { Directive, Host, Input, OnChanges, Optional, SimpleChanges } from '@angular/core';
import { ToggleDirective } from './toggle.directive';

@Directive({
  exportAs: 'toggleProvider',
  selector: 'toggle, [toggle], [toggleProvider]'
})
export class ToggleProviderDirective implements OnChanges {
  @Input() toggleProvider: ToggleDirective;
  @Input('withToggleLabel') label: string;

  toggle: ToggleDirective = this.toggleDirective;

  constructor(
    @Host() @Optional()
    private toggleDirective: ToggleDirective
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const { toggleProvider, label } = changes;
    if (toggleProvider) {
      this.toggle = this.toggleProvider || this.toggleDirective;
    }
    if (label) {
      console.log(this.label);
    }
  }

}
