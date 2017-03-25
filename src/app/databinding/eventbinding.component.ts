import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-eventbinding',
  template: `
    <button (click)="onClicked()">
      click me
    </button>
  `,
  styles: []
})
export class EventbindingComponent {
  @Output() clicked = new EventEmitter<string>();
  onClicked() {
    this.clicked.emit('it worked');
  }

}
