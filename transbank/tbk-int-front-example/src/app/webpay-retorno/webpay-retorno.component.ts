import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'webpay-retorno',
  templateUrl: './webpay-retorno.component.html',
  styleUrls: ['./webpay-retorno.component.css']
})
export class WebpayRetornoComponent implements OnInit {

  mensaje: string = '';
  resultado: string = '';

  constructor(private route: ActivatedRoute, private readonly http: HttpClient) {
    this.mensaje = 'Esperando respuesta de transbank...';
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async params => {
      const checkTransactionResult: any = await this.checkTransactionResult(params['token_ws']);
      if (checkTransactionResult.data.status === 'AUTHORIZED') {
        this.resultado = 'Transacción exitosa';
        this.mensaje = 'Gracias por tu compra';
      } else {
        this.resultado = `Transacción fallida`;
        this.mensaje = 'Lo sentimos, Intenta nuevamente';
      }
    });

  }

  async checkTransactionResult(token: string) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3001/validar-transaccion', { token })
      .subscribe((response: any) => {
        resolve(response);
      }, error => {
        reject(error);
        console.error('Error en la operación', error);
      });
    });
  }

}
