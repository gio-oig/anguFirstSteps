import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;

  noNameChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;

    this.name = value;
  }

  onDateChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;

    this.date = value;
  }

  onAmountChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;

    const amount = isNaN(parseFloat(value)) ? 0 : parseFloat(value);

    this.amount = amount;
  }
}
