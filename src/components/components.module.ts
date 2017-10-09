import { NgModule } from '@angular/core';
import { UserComponent } from './user/user';
import { ProductComponent } from './product/product';
import { MarketComponent } from './market/market';
import { ReceiptComponent } from './receipt/receipt';
import {ReceiptService} from "./receipt/receipt.service";
@NgModule({
	declarations: [UserComponent,
    ProductComponent,
    MarketComponent,
    ReceiptComponent],
	imports: [],
  providers: [
  ],
	exports: [UserComponent,
    ProductComponent,
    MarketComponent,
    ReceiptComponent]
})
export class ComponentsModule {}
