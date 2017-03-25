import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  stringInterporlation = 'This is string interpolation';
  numberInterpolation = 1;

  constructor() { }

  ngOnInit() {
  }

  onClicked(value: string) {
    alert(value);
  }

}
