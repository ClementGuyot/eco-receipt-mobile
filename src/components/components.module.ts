import { NgModule } from '@angular/core';
import { UserComponent } from './user/user';
import { ProductComponent } from './product/product';
import { MarketComponent } from './market/market';
@NgModule({
	declarations: [UserComponent,
    ProductComponent,
    MarketComponent],
	imports: [],
  providers: [
  ],
	exports: [UserComponent,
    ProductComponent,
    MarketComponent]
})
export class ComponentsModule {}
