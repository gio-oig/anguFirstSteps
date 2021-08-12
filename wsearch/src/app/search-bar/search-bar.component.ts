import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() submeted = new EventEmitter<string>();
  term = '';

  constructor() {}

  ngOnInit(): void {}

  onInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;

    this.term = value;
  }

  onFormSubmit(e: Event) {
    e.preventDefault();
    this.submeted.emit(this.term);
  }
}
