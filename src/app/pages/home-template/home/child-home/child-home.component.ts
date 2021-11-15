import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-home',
  templateUrl: './child-home.component.html',
  styleUrls: ['./child-home.component.scss'],
})
export class ChildHomeComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
