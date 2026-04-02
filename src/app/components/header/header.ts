import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadge } from '@angular/material/badge';
import { Router, RouterLink } from '@angular/router';
import { Cart } from '../../services/cart/cart';
import { AuthService } from '../../services/auth/auth';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatBadge, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  router = inject(Router);
  authService = inject(AuthService);
  cart = inject(Cart);
}
