import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebpayRetornoComponent } from './webpay-retorno/webpay-retorno.component';
import { PagoProductoComponent } from './pago-producto/pago-producto.component';

@NgModule({
  declarations: [
    WebpayRetornoComponent,
    PagoProductoComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent, WebpayRetornoComponent, PagoProductoComponent]
})
export class AppModule { 

}
