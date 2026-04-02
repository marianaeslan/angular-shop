import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  if (authService.currentUser()) {
    return true;
  }
  snackBar.open('Você precisa estar logado para acessar esta página.', 'Fechar', {
    duration: 5000,
    panelClass: ['snackbar-erro'],
  });
  return router.createUrlTree(['/']);
};
