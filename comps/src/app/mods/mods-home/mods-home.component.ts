import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Why is the sky blue', content: 'because of air' },
    { title: 'What does an orange taste like', content: 'Like an orange' },
  ];

  constructor() {}

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }

  ngOnInit(): void {}
}
