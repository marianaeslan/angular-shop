import { inject, Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth';

@Injectable({
  providedIn: 'root',
})
export class Orders {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  async getOrders() {
    const usuarioLogado = this.authService.currentUser();

    if (!usuarioLogado || !usuarioLogado.uid) {
      return [];
    }

    const uid = usuarioLogado.uid;

    try {
      const pedidosRef = collection(this.firestore, 'pedidos');
      const q = query(pedidosRef, where('userId', '==', uid));
      const queryResponse = await getDocs(q);

      const allCourses: any[] = [];

      queryResponse.forEach((doc) => {
        const pedido = doc.data();

        if (pedido['itens']) {
          allCourses.push(...pedido['itens']);
        }
      });

      return allCourses;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
