import { Routes } from '@angular/router';
import { ProductoHome } from './producto-home/producto-home';
import { ProductoCard } from './producto-card/producto-card';
import { AcercaComponent } from './acerca-component/acerca-component';

export const routes: Routes = [
  { path: 'productos', component: ProductoHome },
  { path: 'acerca', component: AcercaComponent },
  { path: '**', component: ProductoHome }
];