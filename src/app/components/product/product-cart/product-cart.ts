import { Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Cart } from '../../../services/cart/cart';

@Component({
  selector: 'app-product-cart',
  imports: [MatCardModule, MatButtonModule, CurrencyPipe, MatIconModule],
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.scss',
})
export class ProductCart {
  produto = input.required<any>();
  itemIndex = input.required<number>();
  cartService = inject(Cart);

  removerItem() {
    this.cartService.removeFromCart(this.itemIndex());
  }
}
