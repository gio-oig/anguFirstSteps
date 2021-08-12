import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items: { title: string; content: string }[] = [];
  openedItemIndex = NaN;

  constructor() {}

  ngOnInit(): void {}

  handleSelect(index: number) {
    if (this.openedItemIndex === index) {
      this.openedItemIndex = NaN;
    } else {
      this.openedItemIndex = index;
    }
  }
}
