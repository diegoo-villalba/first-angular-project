import { Component, signal, NgModule, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('productos-app');
  numero: number = 1;
  mensajeBienvenida: string = 'Mi primera App con Angular';
  nombre: string = '';
  nombreProducto:string = '';
  precioProducto:number = 0;
  productos = [
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
  alerta:boolean = false;
  aviso:string = 'Mostrar aviso';
  cambiaColor:boolean = false;
  textoColor: string = 'Mostrar en rojo';
  botonerasVisibles: boolean = false;
  private scrollThreshold: number = 200; // Píxeles desde el top para mostrar las botoneras
  incrementar():void {
    this.numero += 1;
  }

  reducir():void {
    this.numero -= 1;
  }

  reestablecer():void {
    this.numero = 0;
  }

  eliminarProducto(indice: number): void {
    this.productos.splice(indice, 1);
  }

  agregarProducto(): void {
    if (!this.nombreProducto || this.precioProducto <= 0) return; // validación mínima
    this.productos.push({
      nombre: this.nombreProducto,
      precio: this.precioProducto
    });
  
    this.nombreProducto = '';
    this.precioProducto = 0;
  }

  mostrarAviso(): void {
    this.alerta = !this.alerta;
    this.aviso = this.alerta ? 'Ocultar aviso' : 'Mostrar aviso';
  }

  cambiarColor(): void {
    this.cambiaColor = !this.cambiaColor;
    this.textoColor = this.cambiaColor ? 'Mostrar en amarillo' : 'Mostrar en rojo';
  }

  ngOnInit(): void {
    this.setupScrollListener();
  }

  ngOnDestroy(): void {
    this.removeScrollListener();
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
