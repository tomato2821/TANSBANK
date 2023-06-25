import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Component({
  selector: 'pago-producto',
  templateUrl: './pago-producto.component.html',
  styleUrls: ['./pago-producto.component.css']
})
export class PagoProductoComponent {
  title = 'tbk-int-front-example';
  productos: Producto[];
  productoSeleccionado: number = 0; // Establecer el valor por defecto
  monto: number;
  errorProducto: boolean;
  errorMonto: boolean;
  disableTransaction: boolean;
  medioPagoSeleccionado: string;
  producto: string;
  errorMessage: string;

  constructor(private readonly http: HttpClient, private readonly router: Router) {
    this.productos = [];
    this.monto = 0;
    this.errorProducto = false;
    this.errorMonto = false;
    this.disableTransaction = true;
    this.medioPagoSeleccionado = '';
    this.producto = '';
    this.errorMessage = '';
  }

  ngOnInit() {
    // Aquí puedes hacer una llamada a tu API REST para obtener la lista de productos
    this.http.get('http://localhost:3001/listar-productos')
      .subscribe((data: any) => {
        this.productos = data.productos as Producto[];
      });
  }

  seleccionarProducto(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.productoSeleccionado = Number(target.value);
    this.monto = this.productos.find(val => val.id === this.productoSeleccionado)?.precio ?? 0;
    this.errorProducto = false;
    this.actualizarMonto();
    this.disableTransaction = false;
  }

  iniciarTransaccion() {
    this.errorProducto = this.productoSeleccionado === 0;
    this.errorMonto = this.monto === 0;

    if (!this.errorProducto && !this.errorMonto) {
      // Aquí puedes hacer una llamada a tu API REST para realizar la transacción
      const body = { idProducto: `${this.productoSeleccionado}` };
      console.log("🚀 - file: app.component.ts:59 - AppComponent - iniciarTransaccion - body:", body);

      this.http.post('http://localhost:3001/comprar-producto', body)
        .subscribe((response: any) => {
          if (response.success) {
            console.log('Transacción exitosa');
            window.location.href = `${response.data.url}?token_ws=${response.data.token}`;
          } else {
            this.errorMessage = `Error en transacción: ${JSON.stringify(response.errorDetail)}`;
            console.error('Error en transacción', response);
          }
        }, error => {
          this.errorMessage = 'Error en la transacción';
          console.error('Error en la transacción', error);
        });
    }
  }

  actualizarMonto() {
    if (this.productoSeleccionado) {
      this.monto = this.productos.find(val => val.id === this.productoSeleccionado)?.precio ?? 0;;
    } else {
      this.monto = 0;
    }
    this.errorMonto = false;
  }
}