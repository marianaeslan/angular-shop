import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-cart',
  imports: [MatCardModule, MatButtonModule, CurrencyPipe],
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.scss',
})
export class ProductCart {
  produto = input.required<any>();
}
