import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() pages: {
    title: string;
    wordcount: number;
    snippet: string;
    pageid: number;
  }[] = [];

  constructor() {}

  ngOnInit(): void {}
}
