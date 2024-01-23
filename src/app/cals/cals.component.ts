import { Component } from '@angular/core';

@Component({
  selector: 'app-cals',
  templateUrl: './cals.component.html',
  styleUrls: ['./cals.component.css']
})
export class CalsComponent {
  expression: string = '';

  appendToExpression(value: string): void {
    this.expression += value;
  }

  clearExpression(): void {
    this.expression = '';
  }

  calculate(): void {
    try {
      this.expression = eval(this.expression);
    } catch (error) {
      this.expression = 'Error';
    }
  }
}
