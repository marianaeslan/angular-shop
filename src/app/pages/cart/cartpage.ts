import { Component, inject, computed } from '@angular/core';
import { ProductCart } from '../../components/product/product-cart/product-cart';
import { Cart } from '../../services/cart/cart';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  imports: [ProductCart, CurrencyPipe, MatButtonModule, RouterLink],
  templateUrl: './cartpage.html',
  styleUrl: './cartpage.scss',
})
export class CartPage {
  cartService = inject(Cart);
  cartItems = this.cartService.cartItems;
  efetuarPagamento() {
    this.cartService.finalizarCompra();
  }

  valorTotal = computed(() => {
    return this.cartItems().reduce((total, item) => total + item.PRECO, 0);
  });
}
