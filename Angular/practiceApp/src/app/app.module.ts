import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/shopApp/product-list/product-list.component';
import { ProductAlertsComponent } from './components/shopApp/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/shopApp/product-details/product-details.component';
import { CartComponent } from './components/shopApp/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
