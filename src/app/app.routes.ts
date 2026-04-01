import { Routes } from '@angular/router';
import { CartPage } from './pages/cart/cartpage';
import { ProductsGrid } from './components/product/products-grid/products-grid';

export const routes: Routes = [
  { path: 'cartpage', component: CartPage },
  { path: '', component: ProductsGrid },
];
