import { Product } from './../product/product';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cartItems = signal<any[]>([]);

  addToCart(product: any) {
    this.cartItems.update((items) => [...items, product]);
  }
}
