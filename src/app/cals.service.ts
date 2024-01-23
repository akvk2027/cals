import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalsService {

  calsExpression(expression: string): string {
    try {
      return eval(expression).toString();
    } catch (error) {
      return 'Error';
    }
  }
}
