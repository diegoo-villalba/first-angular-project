import { Component, signal, NgModule, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductoCard } from './producto-card/producto-card';
import { Producto } from './model/producto';
import { ProductoService } from './producto-service';

@Component({
  selector: 'app-root',
  imports: [ FormsModule, CommonModule, ProductoCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('productos-app');
  numero: number = 1;
  mensajeBienvenida: string = 'Mi primera App con Angular';
  nombre: string = '';

  nombreProducto : string = '';
  precioProducto : number = 0;
  alerta:boolean = false;
  aviso:string = 'Mostrar aviso';
  cambiaColor:boolean = false;
  textoColor: string = 'Mostrar en rojo';
  botonerasVisibles: boolean = false;
  private scrollThreshold: number = 200; // Píxeles desde el top para mostrar las botoneras

  productos: Producto[] = []; //A productos (que uso acá adentro) lo lleno con el servicio

  constructor (private productoService: ProductoService) {}

  ngOnInit(): void {
    this.setupScrollListener();
    this.productos = this.productoService.getProductos(); //acá
  }

  eliminarProducto(indice: number): void {
    this.productoService.eliminarProducto(indice);
  }

  agregarProducto(nombre: string, precio : number): void {
    this.productoService.agregarProducto(nombre, precio)
    this.productos = this.productoService.getProductos(); //Refresco la lista
    this.nombreProducto = '';
    this.precioProducto = 0
  }


  ngOnDestroy(): void {
    this.removeScrollListener();
  }

  incrementar():void {
    this.numero += 1;
  }

  reducir():void {
    this.numero -= 1;
  }

  reestablecer():void {
    this.numero = 0;
  }


  mostrarAviso(): void {
    this.alerta = !this.alerta;
    this.aviso = this.alerta ? 'Ocultar aviso' : 'Mostrar aviso';
  }

  cambiarColor(): void {
    this.cambiaColor = !this.cambiaColor;
    this.textoColor = this.cambiaColor ? 'Mostrar en amarillo' : 'Mostrar en rojo';
  }

  private setupScrollListener(): void {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  private removeScrollListener(): void {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  private handleScroll(): void {
    const scrollY = window.scrollY;
    this.botonerasVisibles = scrollY > this.scrollThreshold;
  }
}
