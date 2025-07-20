import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-producto-card',
  imports: [],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css'
})
export class ProductoCard {
@Input() producto!: Producto;
@Input() indice!: number;

@Output() eliminar = new EventEmitter<number>();

eliminarProducto() {
  this.eliminar.emit(this.indice);
}

// Método para determinar si el precio es alto
esPrecioAlto(): boolean {
  return this.producto.precio > 500;
}
}
