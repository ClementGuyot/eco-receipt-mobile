import { Component } from '@angular/core';
import {ReceiptService} from "../../components/receipt/receipt.service";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  public name:String

  constructor() {
  }
}
