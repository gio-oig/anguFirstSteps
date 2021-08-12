import { Component, Input, OnInit } from '@angular/core';
import {
  DataInterface,
  HeaderInterface,
} from '../collections-home/collections-home.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() data!: DataInterface[];
  @Input() headers!: HeaderInterface[];
  @Input() className = '';

  constructor() {}

  ngOnInit(): void {}
}
