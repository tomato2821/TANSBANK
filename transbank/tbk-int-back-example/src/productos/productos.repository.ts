import { Injectable } from '@nestjs/common';
import { Producto } from './productos.entity';

@Injectable()
export class ProductosRepository {
  private products: Array<Producto> = [
    { id: 1, nombre: 'Producto A', precio: 100 } as Producto,
    { id: 2, nombre: 'Producto B', precio: 200 } as Producto,
    { id: 3, nombre: 'Producto C', precio: 300 } as Producto,
    { id: 4, nombre: 'Producto D', precio: 400 } as Producto,
    { id: 5, nombre: 'Producto E', precio: 500 } as Producto,
  ];

  find(): Array<Producto> {
    return this.products;
  }

  findOne(id): Promise<Producto> {
    return new Promise((resolve, reject) => {
      const producto: Producto = this.products.find((val) => val.id == id);
      if (!producto) return reject(new Error('Product not found'));

      return resolve(producto);
    });
  }
}
