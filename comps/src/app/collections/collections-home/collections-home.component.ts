import { Component, OnInit } from '@angular/core';

export interface DataInterface {
  name: string;
  age: number;
  job: string;
}

export type Keys = keyof DataInterface;

export interface HeaderInterface {
  key: Keys;
  label: string;
}

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data: DataInterface[] = [
    { name: 'James', age: 24, job: 'Designer' },
    { name: 'Jill', age: 26, job: 'Engineer' },
    { name: 'Elyse', age: 25, job: 'Engineer' },
  ];

  headers: HeaderInterface[] = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
