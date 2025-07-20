import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  productos: Producto [] = [
    {
      nombre: 'Manzana', precio:10
    },
    {
      nombre: 'Banana', precio:23
    },
    {
      nombre: 'Uva', precio:42
    }
  ];

  getProductos(): Observable<Producto[]>  {
    return of(this.productos).pipe(delay(2000));
  }

  eliminarProducto(indice: number): void {
    this.productos.splice(indice, 1);
  }

  agregarProducto(nombreProducto: string, precioProducto : number): void {
    this.productos.push({
      nombre: nombreProducto,
      precio: precioProducto
    });
  
  }
  
}
