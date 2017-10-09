import { Component } from '@angular/core';

/**
 * Generated class for the MarketComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'market',
  templateUrl: 'market.html'
})
export class MarketComponent {

  text: string;

  constructor() {
    console.log('Hello MarketComponent Component');
    this.text = 'Hello World';
  }

}
