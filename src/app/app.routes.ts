import { Routes } from '@angular/router';
import { CartPage } from './pages/cart/cartpage';
import { ProductsGrid } from './components/product/products-grid/products-grid';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: 'cartpage', component: CartPage },
  { path: '', component: ProductsGrid },
  {
    path: 'meus-cursos',
    loadComponent: () => import('./pages/meus-cursos/meus-cursos').then((m) => m.MeusCursos),
    canActivate: [authGuard],
  },
];
