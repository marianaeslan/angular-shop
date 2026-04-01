import { Product } from './../product/product';
import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  private items: WritableSignal<any[]> = signal([]);

  addToCart(product: Product) {
    this.items.asReadonly();
    this.items.update((currentItems) => [...currentItems, product]);
  }
}
