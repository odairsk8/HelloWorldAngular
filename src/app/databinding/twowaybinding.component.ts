import { Component } from '@angular/core';

@Component({
  selector: 'fa-twowaybinding',
  template: `
    <input type="text" [(ngModel)]="person.name" />
    <input type="text" [(ngModel)]="person.name" />
  `,
  styles: []
})
export class TwowaybindingComponent {
  person = {
    name: 'Odair',
    age: 32
  };
}
