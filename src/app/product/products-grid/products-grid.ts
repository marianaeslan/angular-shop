import { Component, inject } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../services/product/product';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  private productService = inject(Product);
  protected products = toSignal(this.productService.getProducts(), { initialValue: [] });
}
