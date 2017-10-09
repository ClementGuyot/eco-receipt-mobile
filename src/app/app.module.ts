import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {BudgetPage} from "../pages/budget/budget";
import {ConsumptionPage} from "../pages/consumption/consumption";
import {HomePage} from "../pages/home/home";
import {QrcodePage} from "../pages/qrcode/qrcode";
import {SettingsPage} from "../pages/settings/settings";
import {WarningPage} from "../pages/warning/warning";
import {ReceiptService} from "../components/receipt/receipt.service";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    BudgetPage,
    ConsumptionPage,
    HomePage,
    QrcodePage,
    SettingsPage,
    WarningPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    BudgetPage,
    ConsumptionPage,
    HomePage,
    QrcodePage,
    SettingsPage,
    WarningPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
