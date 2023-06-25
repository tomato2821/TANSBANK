import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebpayRetornoComponent } from './webpay-retorno/webpay-retorno.component';
import { PagoProductoComponent } from './pago-producto/pago-producto.component';

const routes: Routes = [
  { path: 'productos/comprar', component: PagoProductoComponent },
  { path: 'webpay/retorno', component: WebpayRetornoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
