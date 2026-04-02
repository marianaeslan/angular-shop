import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { computed, inject, Injectable, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  private items = signal<any[]>([]);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
  private authService = inject(AuthService);
  cartItems = this.items.asReadonly();

  private firestore = inject(Firestore);

  valorTotal = computed(() => {
    return this.cartItems().reduce((total, item) => total + (item.PRECO || 0), 0);
  });

  addToCart(product: any) {
    this.items.update((currentItems) => [...currentItems, product]);
  }

  async finalizarCompra() {
    try {
      const pedidosRef = collection(this.firestore, 'pedidos');
      const usuario = this.authService.currentUser();
      await addDoc(pedidosRef, {
        itens: this.cartItems(),
        total: this.valorTotal(),
        data: new Date(),
        userId: usuario ? usuario.uid : null,
      });

      this.items.set([]);
      this.snackBar.open('Pedido finalizado com sucesso!', 'Fechar', {
        duration: 6000,
        panelClass: ['snackbar-success'],
      });
      this.router.navigate(['/']);
      console.log('Pedido salvo no Firebase com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar pedido no Firebase:', error);
    }
  }
}
