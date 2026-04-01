import { Component, input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { CurrencyPipe } from '@angular/common';
import { Cart } from '../../../services/cart/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, MatButtonModule, MatChipsModule, CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  produto = input.required<any>();
  cart = inject(Cart);

  addToCart() {
    this.cart.addToCart(this.produto());
    // remover depois, testando
    console.log(this.cart);
  }
  router = inject(Router);

  goToCart() {
    this.router.navigate(['/cartpage']);
  }
}
