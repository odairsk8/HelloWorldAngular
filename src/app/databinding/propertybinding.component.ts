import { Component, Input } from '@angular/core';

@Component({
  selector: 'fa-propertybinding',
  template: `
    {{result}}
  `,
  styles: []
})
export class PropertybindingComponent  {
   @Input() result: number = 2;
}
