import { Component } from '@angular/core';
import {
  PluckedWikipediaResponce,
  WikipediaService,
} from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: PluckedWikipediaResponce[] = [];
  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((res) => {
      this.pages = res;
    });
  }
}
